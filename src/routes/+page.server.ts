import { error } from '@sveltejs/kit';
import db from '$lib/server/database';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// TODO fetch url from cloudinary figure out media
	const videoURL = env.VIDEO_URL;
	let articles = null;

	if (!videoURL) {
		error(404, 'Video not found');
	}

	try {
		articles = await db.article.findMany();
	} catch (err) {
		return error(500, 'Internal Server Error');
	}

	return { videoURL, articles };
};
