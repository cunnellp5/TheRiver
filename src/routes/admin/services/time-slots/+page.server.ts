import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const timeSlots = await db.timeSlot.findMany();
		return { timeSlots };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
