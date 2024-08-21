import db from '$lib/server/database';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const business = await db.businessInfo.findFirst();
		return { business };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};

export const actions: Actions = {
	updateBusinessInfo: async ({ request }) => {
		const formData = await request.formData();
		const id = Number(formData.get('id'));
		const key = formData.get('key') as string;
		const value = formData.get('value') as string;

		try {
			await db.businessInfo.update({
				where: { id },
				data: { [key]: value }
			});
			return { success: true };
		} catch (err) {
			return error(500, 'Internal Server Error');
		}
	}
};
