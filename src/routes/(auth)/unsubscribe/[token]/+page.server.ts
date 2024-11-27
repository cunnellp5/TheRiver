import db from '$lib/server/database';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validateInputs } from '$lib/utils/validateInputs';

// TODO send an email to the user with a token to confirm their unsubscription choice,
// for now just rm the record if it exists
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		// validate email
		const validationResult = validateInputs(EmailSchema, { email });
		if (validationResult) {
			return validationResult; // Return the error response
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
