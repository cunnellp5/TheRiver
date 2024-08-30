import db from '$lib/server/database';
import { error, redirect, type Actions } from '@sveltejs/kit';
import { servicesMapper } from '$lib/utils/servicesMapper';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	let remappedServices;
	let about;

	try {
		const services = await db.service.findMany({
			include: {
				category: true
			}
		});
		if (!services) return error(404, 'No services found');
		remappedServices = servicesMapper(services);
	} catch (err) {
		return error(500, err.message);
	}

	try {
		about = await db.about.findFirst({
			where: {
				name: 'services'
			}
		});
	} catch (err) {
		return error(500, err.message);
	}

	return {
		services: remappedServices,
		about
	};
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
