import { TRACKS } from '$lib/data/soundcloud_tracks';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session || !locals.user) {
		return error(404, 'Not found');
	}
	return { tracks: TRACKS };
};
