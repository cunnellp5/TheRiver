import db from '$lib/server/database';
import { SignUpSchema } from '$lib/utils/Valibot/SignUp';
import { error, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { ValiError, parse } from 'valibot';
import type { SignUpValidator } from '$lib/utils/Valibot/SignUp';

import type { Actions } from './$types';
import type { Newsletter } from '@prisma/client';
import { login } from '$lib/server/controllers/login';

/* 
Might be worth adding even more validations, but could be overkill:
	https://www.prisma.io/docs/orm/prisma-client/queries/custom-validation

Default action:
	-- set up / check client side info --	
	
	1. extracts form data
	2. basic validation 
	3. schema emailValidation
	
	-- check server side info --
	
	4. check for existing user 
	5. check for existing newsletter subscription 
	
	-- write operations --
	
	6. hash password (step needed for create user, hash() returns a promise)
	7. create user
	8. create newsletter subscription
	9. create session

	-- email / redirection --

	10. send welcome email
	11. redirect to dashboard
*/
export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		// pulls out the data I need
		const email = formData.get('email')?.toString() || '';
		const password = formData.get('password')?.toString() || '';
		const firstName = formData.get('firstName')?.toString() || '';
		const lastName = formData.get('lastName')?.toString() || '';
		const isSubscribed = formData.get('isSubscribed')?.toString() === 'on';
		const confirm = formData.get('confirm')?.toString() || '';

		// This is unnecessary
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
				where: { email: email }
			});
			if (user) return fail(400, { message: 'Email is unavailable' });
		} catch (err) {
			return error(500, { message: 'Something unexpected occured' });
		}

		// Begin setting up for write transactions
		let newUser = null;
		let newsLetterSubscription: Newsletter | null = null;

		// TODO maybe run a check earlier for the newsLetter,
		// and ask the user if they would want to continuse to subscribe or cancel it,
		// for now, not asking the user and just associating the user with the subscription or deleting it
		try {
			await db.$transaction(async () => {
				// Generate hash
				const hashedPassword = await new Argon2id().hash(password);

				// Create user
				newUser = await db.user.create({
					data: {
						email: email,
						firstName: firstName,
						lastName: lastName,
						hashedPassword
					}
				});

				// Find subscription
				newsLetterSubscription = await db.newsletter.findUnique({
					where: { email: email }
				});

				// Handle newsletter subscription based on user's choice
				if (isSubscribed) {
					if (newsLetterSubscription) {
						// User is subscribed and already has a subscription, update the userId
						await db.newsletter.update({
							where: { email },
							data: { userId: newUser.id }
						});
					} else {
						// User is subscribed but does not have a subscription, create a new one
						await db.newsletter.create({
							data: { email, userId: newUser.id }
						});
					}
				} else if (newsLetterSubscription) {
					// User is not subscribed but has an existing subscription, delete it
					await db.newsletter.delete({
						where: { email }
					});
				}

				// Set token/session
				await login({ userId: newUser.id, event });
			});
		} catch (err) {
			console.error('Error during transaction:', err);
			return error(500, { message: 'Internal Server Error' });
		}

		// User created, token set, time to send welcome email!
		// Only send an email if we never found a subscription
		// (if they subscribed they would have recieved a similar welcome email)
		if (!newsLetterSubscription) {
			try {
				event.fetch('api/emails/welcome', {
					method: 'POST',
					body: JSON.stringify({ subject: 'Thanks for Signing up - The River', email: email }),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			} catch (error) {
				// Do nothing if email fails, user is still created, but report it
				console.error(error, 'Error sending email');
			}
		}

		// Finally, send user to a dashboard
		return redirect(302, '/dashboard');
	}
};
