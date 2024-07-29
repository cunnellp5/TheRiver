import { error } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { PlaylistItemResource, VideoResource } from './youtubeTypes';

// TODO Check playlist title for 'originals'?

export const actions: Actions = {
	default: async (event) => {
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

		return {
			data: embededElements
		};
	}
};
