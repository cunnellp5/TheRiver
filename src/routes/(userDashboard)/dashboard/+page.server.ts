import { error } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const user = await db.user.findUnique({
			where: { id: event.locals.user.id }
		});

		return { user };
	} catch (err) {
		return error(404, 'Not found');
	}
};
