import db from '$lib/server/database';
import { error, type Actions } from '@sveltejs/kit';
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

export const actions: Actions = {
	add: async ({ request }) => {
		const form = await request.formData();

		// TODO validate with valibot

		const day = `${form.get('day')}T00:00:00.000Z`;

		const timeSlot = {
			availability: form.get('availability'),
			day,
			endTime: `${day.split('T')[0]}T${form.get('endTime')}:00.000Z`,
			startTime: `${day.split('T')[0]}T${form.get('startTime')}:00.000Z`
		};

		if (!timeSlot) {
			return error(400, 'Bad Request');
		}

		try {
			await db.timeSlot.create({ data: timeSlot });
			return { status: 201 };
		} catch (err) {
			// TODO add sentry
			return error(500, 'Internal Server Error');
		}
	}
};
