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

		// Validate input
		const availability = form.get('availability');
		const day = form.get('day');
		const startTime = form.get('startTime');
		const endTime = form.get('endTime');

		if (!availability || !day || !startTime || !endTime) {
			return error(400, 'Bad Request: Missing required fields');
		}

		// Create time slot object
		const dayString = `${day}T00:00:00.000Z`;
		const timeSlot = {
			availability: availability === 'true', // Assuming availability is a boolean
			day: new Date(dayString),
			startTime: new Date(`${day}T${startTime}:00.000Z`),
			endTime: new Date(`${day}T${endTime}:00.000Z`)
		};
		try {
			await db.timeSlot.create({ data: timeSlot });
			return { status: 201 };
		} catch (err) {
			// TODO add sentry
			return error(500, 'Internal Server Error');
		}
	}
};
