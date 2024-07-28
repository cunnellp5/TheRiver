import { error } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Check playlist title for 'originals'
const playlistId = 'PLfz9_FVWWQKey0AHxueGFOdEtv111qvy8';

// temporarily saving videoIds from the selected playlist
const videoIds = [
	'KzFmhEvBsKg',
	'EHsp2l08DyY',
	'H5lNpqJjvqM',
	'zEa9hCH_acs',
	'qa9NtCoOaCk',
	'0zhzvcDHcDs',
	'Gj1zGmGRfIQ',
	'oWPTJSC0qJU'
];

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session || !event.locals.user?.isAdmin) {
			return error(401, 'Unauthorized');
		}

		// // FIRST GET video IDS from 'originals' playlist
		const playlistItems = await event.fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?key=${env.YOUTUBE_KEY}&channelId=${env.YOUTUBE_CHANNEL_ID}&playlistId=${playlistId}&part=snippet&maxResults=50`
		);
		const data = await playlistItems.json();

		const mapped = data.items.map((item) => {
			console.log(item.snippet.resourceId.videoId, 'snippet');
			return item.snippet.resourceId.videoId;
		});

		return {
			data: mapped
		};

		// save video IDs, compare to existing, add new ones, remove old ones

		// // THEN GET ALL VIDEOS embedded players
		// const playlistItems = await event.fetch(
		// 	`https://www.googleapis.com/youtube/v3/videos?key=${env.YOUTUBE_KEY}&channelId=${channelId}&id=KzFmhEvBsKg,EHsp2l08DyY&part=player&maxResults=50`
		// );
		// const data = await playlistItems.json();
		// console.log(data, 'datum');
		// // const mapped = data.items.map((item) => {
		// // 	console.log(item.snippet.resourceId.videoId, 'snippet');
		// // 	return item.snippet.resourceId.videoId;
		// // });

		// return {
		// 	data
		// };
	}
};
