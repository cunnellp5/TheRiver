import { fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import db from '$lib/server/database';
import type { Actions } from './$types';
import { login } from '$lib/server/controllers/login';

const ERROR_MESSAGE = 'Invalid credentials';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		// TODO use zod validation
		if (typeof email !== 'string' || email.length < 3) {
			console.error('Invalid email');
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		// validate password
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			console.error('Invalid password');
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		// check for user
		const existingUser = await db.user.findFirst({
			where: { email: email.toString() }
		});

		if (!existingUser) {
			console.error('User not found');
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		const validPassword = await new Argon2id().verify(existingUser.hashedPassword, password);

		if (!validPassword) {
			console.error('Invalid password');
			return fail(400, {
				message: ERROR_MESSAGE
			});
		}

		await login({ userId: existingUser.id, cookies: cookies });

		return redirect(302, '/dashboard');
	}
};
