import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

// prevents any unauthorized access to ANY of the admin panel
export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return error(400, 'Bad request');
	}

	return {
		email: event.locals.user.email
	};
};
