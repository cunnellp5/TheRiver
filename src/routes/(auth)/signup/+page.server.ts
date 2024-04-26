import { lucia } from '$lib/server/auth';
import { error, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import db from '$lib/server/database';
import { parse, ValiError } from 'valibot';
import { SignUpSchema } from '$lib/test/ValibotSchemas/SignUpSchema';
import type { SignUpValidator } from '$lib/test/ValibotSchemas/SignUpSchema';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.session) redirect(302, '/login');
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;
		const isSubscribed = formData.get('isSubscribed') as string;
		const confirm = formData.get('confirm') as string;

		if (
			!email ||
			!password ||
			!firstName ||
			!lastName ||
			!isSubscribed ||
			!confirm ||
			confirm !== password
		)
			return fail(400, { message: 'Please fill out all fields' });

		// validates with valibot
		try {
			parse(SignUpSchema, {
				email,
				password,
				firstName,
				lastName,
				isSubscribed: isSubscribed === 'on',
				confirm
			}) as SignUpValidator;
		} catch (err) {
			const errors = err as ValiError;
			return fail(400, {
				message: errors.message
			});
		}

		// Check db for existing email
		try {
			await db.user.findUnique({
				where: { email: email.toString() }
			});
		} catch (err) {
			return fail(400, { message: 'That email is already used' });
		}

		let hashedPassword = null;

		try {
			hashedPassword = await new Argon2id().hash(password);
		} catch (err) {
			error(500, { message: 'Something unexpected occured' });
		}

		let newUser = null;

		try {
			// insert new user
			newUser = await db.user.create({
				data: {
					email: email?.toString() || '',
					firstName: firstName?.toString() || '',
					lastName: lastName?.toString() || '',
					isSubscribed: Boolean(isSubscribed) || false,
					hashedPassword
				}
			});

			// inner set
			try {
				const session = await lucia.createSession(newUser.id, {});

				const sessionCookie = lucia.createSessionCookie(session.id);

				cookies.set(sessionCookie.name, sessionCookie.value, {
					path: '.',
					...sessionCookie.attributes
				});

				throw redirect(302, '/dashboard');
			} catch {
				throw error(500, { message: 'Failed to create session' });
			}
		} catch {
			throw error(500, { message: 'Failed to create user' });
		}
	}
};
