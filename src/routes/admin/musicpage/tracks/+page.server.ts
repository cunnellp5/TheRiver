import { TRACKS } from '$lib/data/soundcloud_tracks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({ tracks: TRACKS });
