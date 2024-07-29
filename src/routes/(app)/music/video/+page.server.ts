import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const videos = await db.youtubeVideo.findMany();

		const iframes = videos.map((video) => video.iframe);

		return { videos: iframes };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
