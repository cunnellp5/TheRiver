import { error } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const about = await db.about.findFirst({
			where: {
				name: 'music'
			}
		});

		if (!about) {
			return { about: { text: 'Checkout the latest tracks' } };
		}

		return { about };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
