import { error, fail, redirect } from '@sveltejs/kit';
import { logout } from '$lib/server/controllers/logout';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies, parent }) => {
	if (!locals.session) {
		return error(404, 'Not Found');
	}

	// If the user gets here:
	// 1. remove session
	// 2. redirect to home page
	await logout({ locals, cookies });

	return redirect(302, '/');
};

// This is an action triggered from the nav bar:
// 1. remove session
// 2. show toast message
// 3. redirect to home page
export const actions: Actions = {
	default: async ({ locals, cookies }) => {
		if (!locals.session) {
			return fail(404);
		}

		await logout({ locals, cookies });

		return redirect(302, '/');
	}
};
