import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// TODO fetch url from cloudinary figure out media
	const videoURL = env.VIDEO_URL;

	if (!videoURL) {
		throw error(404, 'Video not found');
	}

	return { videoURL };
};
