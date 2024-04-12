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
		const email = formData.get('email');
		const password = formData.get('password');
		const firstName = formData.get('firstName');
		const lastName = formData.get('lastName');
		const isSubscribed = formData.get('isSubscribed');

		// TODO replace with zod validation

		// validate username
		if (
			typeof firstName !== 'string' ||
			firstName.length < 3 ||
			firstName.length > 31 ||
			!/^[a-z0-9_-]+$/.test(firstName)
		) {
			return fail(400, {
				message: 'Invalid name'
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
		const existingEmail = await db.profile.findUnique({
			where: { email: email.toString() }
		});
		if (existingEmail) {
			return fail(400, { message: 'email inuse' });
		}

		const hashedPassword = await new Argon2id().hash(password);

		// insert new user
		const newUser = await db.user.create({
			data: {
				profile: {
					create: {
						email: email?.toString() || '',
						firstName: firstName?.toString() || '',
						lastName: lastName?.toString() || '',
						isSubscribed: Boolean(isSubscribed) || false
					}
				},
				hashedPassword: hashedPassword
			},
			include: {
				profile: true
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
