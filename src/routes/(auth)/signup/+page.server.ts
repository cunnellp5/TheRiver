import { lucia } from '$lib/server/auth';
import db from '$lib/server/database';
import { SignUpSchema } from '$lib/utils/Valibot/SignUp';
import { error, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { ValiError, parse } from 'valibot';
import type { SignUpValidator } from '$lib/utils/Valibot/SignUp';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.session) redirect(302, '/login');
};
// TODO https://www.prisma.io/docs/orm/prisma-client/queries/custom-validation
export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;
		const isSubscribed = (formData.get('isSubscribed') as string) === 'on';
		const confirm = formData.get('confirm') as string;

		if (!email || !password || !firstName || !lastName || !confirm || confirm !== password)
			return fail(400, { message: 'Please fill out all fields' });

		// validates with valibot
		try {
			parse(SignUpSchema, {
				email,
				password,
				firstName,
				lastName,
				isSubscribed,
				confirm
			}) as SignUpValidator;
		} catch (err) {
			const errors = err as ValiError<typeof SignUpSchema>;
			return fail(400, {
				message: errors.message
			});
		}

		// Check db for existing email
		try {
			const user = await db.user.findUnique({
				where: { email: email.toString() }
			});
			if (user) return fail(400, { message: 'Email is unavailable' });
		} catch (err) {
			return fail(500, { message: 'Something unexpected occured' });
		}

		let hashedPassword = null;

		try {
			hashedPassword = await new Argon2id().hash(password);
		} catch (err) {
			return error(500, { message: 'Something unexpected occured' });
		}

		let newUser = null;

		try {
			// insert new user
			newUser = await db.user.create({
				data: {
					email: email?.toString() || '',
					firstName: firstName?.toString() || '',
					lastName: lastName?.toString() || '',
					hashedPassword
				}
			});

			// if user check isSubscribed create record in newsletter
			if (isSubscribed) {
				try {
					await db.newsletter.create({
						data: { email, userId: newUser.id }
					});
				} catch (err) {
					console.error('Error creating newsletter subscription:', err);
					return error(500, 'Internal Server Error');
				}
			}

			// innerset
			try {
				const session = await lucia.createSession(newUser.id, {});
				const sessionCookie = lucia.createSessionCookie(session.id);
				cookies.set(sessionCookie.name, sessionCookie.value, {
					path: '.',
					...sessionCookie.attributes
				});
			} catch (err) {
				console.error('Error creating session:', err);
				return error(500, { message: 'Failed to create session' });
			}
			// or do anything here?
		} catch (err) {
			console.error('Error creating user:', err);
			return error(500, { message: 'Failed to create user' });
		}

		return redirect(302, '/dashboard');
	}
};
