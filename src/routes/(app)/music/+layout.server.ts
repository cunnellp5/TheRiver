import { error } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		const about = await db.about.findFirst({
			where: {
				name: 'music'
			}
		});

		if (!about) {
			return { about: { isShowing: false, text: '' } };
		}

		return { about };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
