import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad } from './$types';
import { emailValidation } from '$lib/utils/Valibot/EmailSchema';
import { parse, ValiError } from 'valibot';
import { type EmailSchema } from '$lib/utils/Valibot/EmailSchema';

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
		let value = formData.get('value') as string | boolean;

		if (key === 'isSubscribed') {
			value = value === 'true';
		}

		// CHECK DB IF EMAIL EXISTS
		if (key === 'email') {
			// validate email
			try {
				parse(emailValidation, value);
			} catch (err) {
				console.log('FUUUUCK YouuU');
				const errors = err as ValiError<typeof EmailSchema>;
				return fail(400, {
					message: errors.message
				});
			}

			const user = await db.user.findUnique({
				where: { email: value.toString() }
			});

			// No change email is the same
			// This should never be hit, but leaving for extra safety
			if (user?.email === value) {
				return { status: 200, message: 'No change' };
			}

			// Email already exists
			if (user) {
				return fail(400, { message: 'That email is already used' });
			}
		}

		try {
			await db.user.update({
				where: { id },
				data: { [key]: value }
			});

			return { status: 200, message: `${key} updated!` };
		} catch (err) {
			return error(500, 'Internal server error');
		}
	}
};
