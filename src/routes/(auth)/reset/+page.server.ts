import db from '$lib/server/database';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { fail } from '@sveltejs/kit';
import { alphabet, generateRandomString, sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import { ValiError, parse } from 'valibot';
import type { Actions } from './$types';

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
			const errors = err as ValiError<typeof EmailSchema>;
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
				return {
					status: 200,
					message: 'Your request was sent to the provided address.',
					success: true
				};
			}
		} catch (error) {
			return fail(400, { message: 'something happened when finding user' });
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
				console.error('Error updating reset password session', error);
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
				console.error('Error creating reset password session', error);
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
			console.error(error, 'Error sending email');
		}

		return {
			status: 200,
			message: 'Your request was sent to the provided address.',
			success: true
		};
	}
};
