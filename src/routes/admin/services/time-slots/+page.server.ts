import db from '$lib/server/database';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const timeSlots = await db.timeSlot.findMany({
			orderBy: {
				day: 'asc'
			}
		});
		return { timeSlots };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};

export const actions: Actions = {
	add: async ({ request }) => {
		const form = await request.formData();
		const selectedDates = form.getAll('selectedDates');
		const startOfDay = form.get('startOfDay');
		const endOfDay = form.get('endOfDay');

		try {
			await db.timeSlot.createMany({
				data: []
			});
			return { status: 201 };
		} catch (err) {
			// TODO add sentry or logging for debugging
			return { status: 500, message: 'Internal Server Error' };
		}
	}
};
