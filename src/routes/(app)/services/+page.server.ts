import db from '$lib/server/database';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const services = await db.service.findMany({
			orderBy: {
				availability: 'asc'
			}
		});

		if (!services) return error(404, 'No services found');

		return { services };
	} catch (err) {
		return error(500, err.message);
	}
};

export const actions: Actions = {
	default: async ({ cookies, request, locals }) => {
		// first check locals to see if user is signed in

		// handle not signed in user, but save selections to a cookie?

		// signein user moves to booking a time slot

		const formData = await request.formData();

		const selectedServices = formData.get('selectedServices');

		throw redirect(302, `/services/booking/?selectedServices=${selectedServices}`);
	}
};
