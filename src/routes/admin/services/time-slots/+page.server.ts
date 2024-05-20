import db from '$lib/server/database';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

function generateTimeSlots(
	day,
	startOfDay,
	endOfDay,
	lunchBreakStart,
	lunchBreakEnd,
	interval,
	otherBreaks
) {
	const slots = [];
	let currentTime = new Date(`${day}T${startOfDay}:00`);
	const endTime = new Date(`${day}T${endOfDay}:00`);
	const lunchStart = new Date(`${day}T${lunchBreakStart}:00`);
	const lunchEnd = new Date(`${day}T${lunchBreakEnd}:00`);

	while (currentTime < endTime) {
		const nextTime = new Date(currentTime.getTime() + interval * 60000);

		if (
			(currentTime >= lunchStart && currentTime < lunchEnd) ||
			otherBreaks.some(
				([breakStart, breakEnd]: [string, string]) =>
					currentTime >= new Date(`${day}T${breakStart}:00`) &&
					currentTime < new Date(`${day}T${breakEnd}:00`)
			)
		) {
			currentTime = nextTime;
			continue;
		}

		slots.push({
			day: new Date(day).toISOString().split('T')[0],
			startTime: currentTime,
			endTime: nextTime,
			availability: true
		});

		currentTime = nextTime;
	}

	return slots;
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
		const selectedDates = form.getAll('selectedDates');
		const startOfDay = form.get('startOfDay');
		const endOfDay = form.get('endOfDay');
		const lunchBreakStart = form.get('lunchBreakStart');
		const lunchBreakEnd = form.get('lunchBreakEnd');
		const timeSlotInterval = Number(form.get('timeSlotInterval'));
		const otherBreaks = form
			.get('otherBreaks')
			?.toString()
			.split(',')
			.map((breakTime) =>
				breakTime
					.trim()
					.split('-')
					.map((time) => `1970-01-01T${time}:00Z`)
			);

		const generatedSlots = selectedDates.flatMap((date) =>
			generateTimeSlots(
				date,
				startOfDay,
				endOfDay,
				lunchBreakStart,
				lunchBreakEnd,
				timeSlotInterval,
				otherBreaks
			)
		);

		console.log(generatedSlots, 'generated slots');

		try {
			await db.timeSlot.createMany({
				data: generatedSlots.map((slot) => ({
					day: slot.day,
					startTime: slot.startTime,
					endTime: slot.endTime,
					availability: slot.availability,
					duration: slot.endTime.getTime() - slot.startTime.getTime()
					// Add any other fields required by your timeSlot table schema
				}))
			});
			return { status: 201 };
		} catch (err) {
			console.error(err);
			return { status: 500, message: 'Internal Server Error' };
		}
	}
};
