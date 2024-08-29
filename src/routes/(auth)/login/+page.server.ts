import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import db from '$lib/server/database';
import type { Actions } from './$types';
import { RateLimiter } from '$lib/utils/rateLimiter';

const rateLimiter = new RateLimiter(5, 300000); // 5 requests per 5 minutes

const ERROR_MESSAGE = 'Invalid credentials';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (rateLimiter.isRateLimited(email)) {
			return fail(429, { message: 'Too Many Requests' });
		}

		// TODO use zod validation
		if (typeof email !== 'string' || email.length < 3) {
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
			where: { email: email.toString() }
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

		return redirect(302, '/dashboard');
	}
};
