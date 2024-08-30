import { fail, redirect } from '@sveltejs/kit';
import { logout } from '$lib/server/controllers/logout';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ locals, cookies }) => {
		if (!locals.session) {
			return fail(404);
		}

		await logout({ locals, cookies });

		return redirect(302, '/logout');
	}
};
