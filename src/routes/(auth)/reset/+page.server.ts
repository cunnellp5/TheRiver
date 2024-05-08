import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import db from '$lib/server/database';
import type { Actions } from './$types';

// const ERROR_MESSAGE = 'Invalid credentials';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		// const user = await db(email);
		// if (!user) {
		// 	return res.status(404).send('User not found');
		// }

		let user = null;

		try {
			user = db.user.findFirst({
				where: { email: email.toString() }
			});

			if (!user) {
				throw new Error('should trickle down and throw success');
			}
		} catch (error) {
			return {
				status: 200,
				message: 'An email was sent to the email address provided. Please check your email.'
			};
			// return fail(404, 'If the email exists, an email was sent');
		}

		try {
			await fetch('api/emails/hello', {
				method: 'POST',
				body: JSON.stringify({ email }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} catch (error) {
			console.log(error, 'error from fetch');
		}

		console.log(email, 'default action nhit');
	}
};
