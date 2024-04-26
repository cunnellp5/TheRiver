import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session) {
		return error(401, 'Unauthorized');
	}

	return { user: event.locals.user };
};
