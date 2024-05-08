import db from '$lib/server/database';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { fail } from '@sveltejs/kit';
import { sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { Argon2id } from 'oslo/password';
import { generateRandomString, alphabet } from 'oslo/crypto';
import { ValiError, parse } from 'valibot';
import type { Actions } from './$types';

// i dont want to expose if the email exists, the user should get the same message regardless.
// security through obscurity
const RESET_MESSAGE = {
	status: 200,
	message: 'Your request was sent to the provided address.'
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		// 1. input validation
		if (!email) {
			return fail(400, {
				message: 'Please enter your email.'
			});
		}

		try {
			await parse(EmailSchema, { email });
		} catch (err) {
			const errors = err as ValiError;
			return fail(400, {
				message: errors.message
			});
		}

		// 2. check if email exists, return success no matter what
		let user = null;
		try {
			user = await db.user.findFirst({
				where: { email: email.toString() }
			});

			if (!user) {
				return fail(400, { message: 'no user found' });
				// return RESET_MESSAGE;
			}
		} catch (error) {
			return fail(400, { message: 'something happened when finding user' });
			// return RESET_MESSAGE;
		}

		// 3. check if there's an existing reset password session
		let resetSession;
		try {
			resetSession = await db.resetPasswordSession.findFirst({
				where: {
					userId: user.id,
					expiresAt: { gt: new Date() }
				}
			});
		} catch (error) {
			return fail(400, { message: 'something happened when finding user' });
			// return RESET_MESSAGE;
		}

		// if email exists, create a token and send it to the user
		// TODO consider using a jwt? for when the user clicks the link to then verify the email stored? maybe?
		const data = new TextEncoder().encode(generateRandomString(10, alphabet('a-z', '0-9')));
		const hash = await sha256(data);
		const hexHash = encodeHex(hash);

		// yes this is verbose, but it's easier to debug
		if (resetSession) {
			// update session ONLY if it exists and it hasnt expired
			try {
				await db.resetPasswordSession.update({
					where: { token: resetSession.token },
					data: {
						userId: user.id,
						token: hexHash,
						expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours in the future
					}
				});
			} catch (error) {
				console.log('error UPDATING reset password session', error);
			}
		} else {
			// create session
			try {
				await db.resetPasswordSession.create({
					data: {
						userId: user.id,
						token: hexHash,
						expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours in the future
					}
				});
			} catch (error) {
				console.log('error creating reset password session', error);
			}
		}

		try {
			await fetch('api/emails/reset', {
				method: 'POST',
				body: JSON.stringify({ email, token: hexHash }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} catch (error) {
			await db.resetPasswordSession.delete({
				where: { token: hexHash }
			});
			console.log(error, 'something funny happened when sending email');
		}

		console.log('reset done');
		return RESET_MESSAGE;
	}
};
