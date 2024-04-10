import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import type { Actions, PageServerLoad } from './$types';

import db from '$lib/server/database';

export const load: PageServerLoad = async (event) => {
	console.log(event);
	// if (!event.locals.user) redirect(302, '/');
	// return {
	// 	username: event.locals.user.username
	// };
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');
		const email = formData.get('email');
		const name = formData.get('name');
		const isSubscribed = formData.get('isSubscribed');

		// TODO replace with zod validation

		// validate username
		if (
			typeof username !== 'string' ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, {
				message: 'Invalid username'
			});
		}

		// validate password
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		// validate email
		if (!email) {
			return fail(400, {
				message: 'Email required'
			});
		}

		// // checks for existing username
		const existingUsername = await db.user.findUnique({
			where: { username: username.toLowerCase() }
		});
		if (existingUsername) {
			return fail(400, { message: 'Username already exists' });
		}

		const hashedPassword = await new Argon2id().hash(password);

		// insert new user
		const newUser = await db.user.create({
			data: {
				email: email?.toString() || '',
				name: name?.toString(),
				username: username,
				hashedPassword: hashedPassword,
				isSubscribed: Boolean(isSubscribed) || false
			}
		});

		const session = await lucia.createSession(newUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/dashboard');
	}
};
