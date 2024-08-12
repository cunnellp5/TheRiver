import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Service } from '@prisma/client';

type TableServiceInfo = Record<string, Service[]>;

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		// GET ALL SERVICES WITH THEY CATEGORIES
		const services = await db.service.findMany({
			include: {
				category: true
			}
		});

		// FORMAT SUCH THAT IT CAN BE USED IN THE TABLE, MANUALLY SORTING CATEGORIES BELOW
		const remappedServices = services.reduce(
			(acc: TableServiceInfo, service) => {
				if (!acc[service.category.name]) {
					acc[service.category.name] = [];
				}
				acc[service.category.name].push({
					...service
				});
				return acc;
			},
			{
				'New Client': [],
				Haircut: [],
				'Hair Color': [],
				'Hair Add-on': [],
				Nails: []
			} as TableServiceInfo
		);

		return { services: remappedServices };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
