import db from '$lib/server/database';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { error, fail, redirect } from '@sveltejs/kit';
import { ValiError, parse } from 'valibot';
import type { Actions } from './$types';

// TODO send an email to the user with a token to confirm their unsubscription choice,
// for now just rm the record if it exists
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

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
