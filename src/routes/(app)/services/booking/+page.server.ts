import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const serviceIds = event.url.searchParams.get('selectedServices');

	if (!event.url.searchParams.get('selectedServices')) {
		throw error(404, 'No services found');
	}

	const ids = serviceIds?.split(',').map(Number);

	let services;

	try {
		services = await db.service.findMany({
			where: {
				id: {
					in: ids
				}
			}
		});
	} catch (err) {
		throw error(500, err.message);
	}

	if (!services) {
		throw error(404, 'No services found');
	}

	return {
		services
	};
};
