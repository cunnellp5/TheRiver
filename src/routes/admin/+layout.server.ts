import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

// prevents any unauthorized access to ANY of the admin panel
export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/error');

	return {
		email: event.locals.user.email
	};
};
