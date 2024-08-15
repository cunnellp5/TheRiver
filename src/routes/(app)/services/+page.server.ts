import db from '$lib/server/database';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { servicesMapper } from '$lib/utils/servicesMapper';

export const load: PageServerLoad = async () => {
	try {
		const services = await db.service.findMany({
			include: {
				category: true
			}
		});

		if (!services) return error(404, 'No services found');

		const remappedServices = servicesMapper(services);

		return { services: remappedServices };
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

		redirect(302, `/services/booking/?selectedServices=${selectedServices}`);
	}
};
