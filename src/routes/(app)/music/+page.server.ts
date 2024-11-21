// import type { PageServerLoad } from './$types';
import type { PageServerLoad } from './$types';
import TRACKS from './TRACKS';

export const load: PageServerLoad = async () => {
	let pages = [];

	// break the array of tracks into chunks of pages of 3 elements
	for (let i = 0; i < TRACKS.length; i += 3) {
		pages.push(TRACKS.slice(i, i + 3));
	}

	return { pages };
};
