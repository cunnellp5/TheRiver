import db from '$lib/server/database';
import { error, fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PlaylistItemResource, VideoResource } from './youtubeTypes';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const videos = await db.youtubeVideo.findMany();

		return { videos };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};

export const actions: Actions = {
	getLatestYoutubeVideos: async (event) => {
		if (!event.locals.session || !event.locals.user?.isAdmin) {
			return error(401, 'Unauthorized');
		}

		// FIRST GET video IDS from 'originals' playlist
		// Then get all videos from the playlist
		const youtubeResults = await event
			.fetch(
				`https://www.googleapis.com/youtube/v3/playlistItems?key=${env.YOUTUBE_KEY}&channelId=${env.YOUTUBE_CHANNEL_ID}&playlistId=${env.YOUTUBE_PLAYLIST_ID}&part=snippet&maxResults=50`
			)
			.then(async (res) => {
				const data = await res.json();
				return data.items.map((item: PlaylistItemResource) => item.snippet.resourceId.videoId);
			})
			.then(async (videoIds) => {
				const videos = await event.fetch(
					`https://www.googleapis.com/youtube/v3/videos?key=${env.YOUTUBE_KEY}&channelId=${env.YOUTUBE_CHANNEL_ID}&id=${videoIds.join(',')}&part=player&maxResults=50`
				);
				const data = await videos.json();
				return data;
			})
			.catch((err) => ({
				data: err
			}));

		const embededElements = youtubeResults.items.map(
			(item: VideoResource) => item.player.embedHtml
		);

		// DELETE ALL or check for UNIQUENESS FIRST
		const res = await db.youtubeVideo.createMany({
			data: youtubeResults.items.map((item: VideoResource) => ({
				iframe: item.player.embedHtml
			}))
		});

		if (res.count > 0) {
			return {
				data: embededElements
			};
		}

		return fail(400, { message: res.errors[0].message });
	}
};
