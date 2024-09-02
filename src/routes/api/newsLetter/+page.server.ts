import db from '$lib/server/database';
import { RateLimiter } from '$lib/utils/rateLimiter';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { error, fail, type ActionFailure } from '@sveltejs/kit';
import { ValiError, parse } from 'valibot';
import type { Actions } from './$types';

const rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

type NewsLetterAction = Promise<
	| {
			type: string;
			status: number;
			message?: string;
	  }
	| ActionFailure<{ message: string }>
>;

export const actions: Actions = {
	subscribe: async ({ request, fetch }): NewsLetterAction => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		if (rateLimiter.isRateLimited(email)) {
			return fail(429, { message: 'Too Many Requests' });
		}

		// validate email
		try {
			await parse(EmailSchema, { email });
		} catch (err) {
			const errors = err as ValiError<typeof EmailSchema>;
			return fail(400, {
				message: errors.message
			});
		}

		// check users
		let user;

		try {
			user = await db.user.findUnique({
				where: { email },
				include: { Newsletter: true }
			});
		} catch (err) {
			console.error('Error creating newsletter subscription:', err);
			return error(500, 'Internal Server Error');
		}

		// if user exists and they are not subscribed, update user and create newsletter table atomically
		if (user) {
			if (!user.Newsletter) {
				// Update user and create newsletter table atomically
				try {
					await db.newsletter.create({
						data: { email, userId: user.id }
					});
				} catch (err) {
					console.error('Error updating user and creating newsletter:', err);
					return error(500, 'Internal Server Error');
				}
			}
			// We can return a success here because if the user exists,
			// and they are NOT subscribed, we can assume the newsletter
			// table should be updated

			// save a cyclte to the newsletter table by early returning here
			return { type: 'success', status: 200 };
		}

		// if we dont have a user:
		// what if someone keeps submitting the same email that hasnt signedup
		// check subscriptions
		let newsletter;
		try {
			newsletter = await db.newsletter.findUnique({
				where: { email }
			});
		} catch (err) {
			console.error('Error finding newsletter subscription:', err);
			return error(500, 'Internal Server Error');
		}

		// create subscription if one doesnt exist in the db
		if (!newsletter) {
			try {
				await db.newsletter.create({
					data: { email }
				});
			} catch (err) {
				console.error('Error creating newsletter subscription:', err);
				return error(500, 'Internal Server Error');
			}
			// we know there was no user in the system,
			// so send welcome email only when there was no newsletter record found,
			// so this should be a first timer without an account
			try {
				await fetch('emails/welcome', {
					method: 'POST',
					body: JSON.stringify({ subject: 'Newsletter Subscription - The River' }),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			} catch (error) {
				console.error(error, 'Error sending email');
			}
		}

		// show success even if there exists a record - no difference
		return { type: 'success', status: 200 };
	}
};
