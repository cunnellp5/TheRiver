import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
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
