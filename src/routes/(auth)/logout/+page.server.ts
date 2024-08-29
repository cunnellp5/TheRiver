import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { logout } from '$lib/server/logout';

export const actions: Actions = {
	default: async ({ locals, cookies }) => {
		if (!locals.session) {
			return fail(404);
		}

		await logout({ locals, cookies });

		return redirect(302, '/logout');
	}
};
