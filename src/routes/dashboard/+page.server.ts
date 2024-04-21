import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return error(401, 'Unauthorized');
	}

	return {
		isAdmin: event.locals.user.isAdmin
	};
};
