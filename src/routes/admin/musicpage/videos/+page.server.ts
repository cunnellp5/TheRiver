import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { PlaylistItemResource } from "./youtubeTypes";
import { env } from "$env/dynamic/private";
import db from "$lib/server/database";
import { error, fail } from "@sveltejs/kit";

interface YoutubeVideo {
  videoId: string;
  title: string;
  description: string;
  position: number;
  thumbnail: string;
}

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  try {
    const videos = await db.youtubeVideo.findMany();
    if (!videos) {
      return { videos: [] };
    }
    return { videos };
  }
  catch (err) {
    return { videos: [] };
  }
};

export const actions: Actions = {
  getLatestYoutubeVideos: async (event) => {
    if (!event.locals.session || !event.locals.user?.isAdmin) {
      return error(401, "Unauthorized");
    }

    // FIRST GET video IDS from 'originals' playlist
    // Then get all videos from the playlist
    const youtubeResults = await event
      .fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${env.YOUTUBE_KEY}&channelId=${env.YOUTUBE_CHANNEL_ID}&playlistId=${env.YOUTUBE_PLAYLIST_ID}&part=snippet&maxResults=50`,
      )
      .then(async (res) => {
        const data = await res.json();
        return data.items
          .filter(
            (item: PlaylistItemResource) =>
              !item.snippet.title.toLowerCase().includes("private")
              || !item.snippet.description.toLowerCase().includes("private"),
          )
          .map((item: PlaylistItemResource) => ({
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            position: item.snippet.position,
            thumbnail:
							item.snippet?.thumbnails?.maxres?.url || item.snippet?.thumbnails?.standard?.url, // consider just using standard
          }));
      })
      .catch(err => ({
        data: err,
      }));

    // DELETE ALL
    await db.youtubeVideo.deleteMany();

    // REUPDATE
    const res = await db.youtubeVideo.createMany({
      data: youtubeResults.map((src: YoutubeVideo) => ({
        videoId: src.videoId,
        title: src.title,
        description: src.description,
        position: src.position,
        thumbnail: src.thumbnail,
      })),
    });

    if (res.count > 0) {
      return {
        data: res,
      };
    }

    return fail(500, { message: "something with the DB broke" });
  },
};
