import type { PageServerLoad } from './$types';
import TRACKS from './TRACKS';

export const load: PageServerLoad = async () => {
	return { tracks: TRACKS };
};
