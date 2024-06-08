import db from '$lib/server/database';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface TimeSlot {
	startTime: Date;
	endTime: Date;
	available: boolean;
	day: string;
}

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
		const events = JSON.parse(form.get('events'));

		const timeSlots: TimeSlot[] = [];

		events.forEach((event) => {
			const start = new Date(event.start);
			const end = new Date(event.end);

			while (start < end) {
				const timeSlot = {
					startTime: new Date(start),
					endTime: new Date(start.getTime() + 15 * 60000),
					available: true,
					day: new Date(new Date(event.start).setHours(0, 0, 0, 0)).toISOString()
				};
				timeSlots.push(timeSlot);
				start.setMinutes(start.getMinutes() + 15);
			}
		});

		try {
			await db.timeSlot.createMany({
				data: timeSlots
			});
			return { status: 201 };
		} catch (err) {
			// TODO add sentry or logging for debugging
			return { status: 500, message: 'Internal Server Error' };
		}
	}
};
