import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const videos = await db.youtubeVideo.findMany();

		return { videos };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
