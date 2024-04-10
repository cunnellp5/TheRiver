import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log(event.locals, 'whatishappenind');
	if (!event.locals.user) redirect(302, '/auth/login');
	return {
		username: event.locals.user.username
	};
};
