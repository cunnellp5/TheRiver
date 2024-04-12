import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import type { Actions } from './$types';

import db from '$lib/server/database';

const ERROR_MESSAGE = 'Invalid credentials';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		// TODO use zod validation
		if (typeof email !== 'string' || email.length < 3 || !/^[a-z0-9_-]+$/.test(email)) {
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		// validate password
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		// check for user
		const existingUser = await db.user.findFirst({
			where: { profile: { email: email.toString() } },
			include: { profile: true }
		});

		if (!existingUser) {
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		const validPassword = await new Argon2id().verify(existingUser.hashedPassword, password);

		if (!validPassword) {
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		const session = await lucia.createSession(existingUser.id, {});

		const sessionCookie = lucia.createSessionCookie(session.id);

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/dashboard');
	}
};
