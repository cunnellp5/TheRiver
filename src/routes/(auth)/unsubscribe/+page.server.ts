import db from '$lib/server/database';
import { RateLimiter } from '$lib/utils/rateLimiter';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { error, fail, redirect, type ActionFailure } from '@sveltejs/kit';
import { ValiError, parse } from 'valibot';
import type { Actions } from './$types';

const rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

// TODO send an email to the user with a token to confirm their unsubscription choice,
// for now just rm the record if it exists
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		if (rateLimiter.isRateLimited(email)) {
			return fail(429, { message: 'Too Many Requests' });
		}

		try {
			await parse(EmailSchema, { email });
		} catch (err) {
			const errors = err as ValiError<typeof EmailSchema>;
			return fail(400, {
				message: errors.message
			});
		}

		try {
			const subscription = await db.newsletter.findUnique({
				where: { email }
			});

			if (subscription) {
				await db.newsletter.delete({
					where: { email }
				});
			}
		} catch (err) {
			console.error('Error handling newsletter subscription:', err);
			return error(500, 'Internal Server Error');
		}

		// show success no matter what
		return redirect(302, '/');
	}
};
