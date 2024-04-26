import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(401, 'Unauthorized');
	}

	try {
		const services = await db.service.findMany();
		return { services };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
