import { error, redirect, type Actions } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// IF NOT LOGGED IN, REDIRECT TO LOGIN
	if (!event.locals.session || !event.locals.user) {
		return redirect(302, '/');
	}

	try {
		const user = await db.user.findUnique({
			where: {
				id: event.locals.user.id
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true,
				isSubscribed: true
			}
		});

		// IF NO USER FOUND IN DB, REDIRECT TO LOGIN
		if (!user) {
			return redirect(302, '/');
		}

		return { user };
	} catch (err) {
		return error(500, 'Something went wrong');
	}
};

export const actions: Actions = {
	updateUser: async ({ request, locals }) => {
		// IF NOT LOGGED IN, RETURN 404
		if (!locals.session || !locals.user) {
			return error(404, 'Not found');
		}

		const formData = await request.formData();
		const id = formData.get('id') as string;
		const key = formData.get('key') as string;
		const value = formData.get('value') as string;

		console.log({ id, key, value }, 'inside server');

		try {
			await db.user.update({
				where: { id },
				data: { [key]: value }
			});

			return { status: 200 };
		} catch (err) {
			return error(500, 'Internal server error');
		}
	}
};
