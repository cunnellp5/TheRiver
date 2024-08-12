import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ServiceCategory } from '@prisma/client';

type TableServiceInfo = Record<
	ServiceCategory,
	{
		Service: string;
		Description: string;
		Duration: string;
		Availability: string;
		Price: string;
	}[]
> & { [key: string]: any };

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const services = await db.service.findMany({
			include: {
				category: true
			}
		});

		const remappedServices = services.reduce((acc: TableServiceInfo, service) => {
			if (!acc[service.category.name]) {
				acc[service.category.name] = [];
			}

			acc[service.category.name].push({
				...service
			});
			return acc;
		}, {} as TableServiceInfo);

		return { services: remappedServices };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};
