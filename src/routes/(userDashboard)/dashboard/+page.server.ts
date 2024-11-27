import { logout } from '$lib/server/controllers/logout';
import db from '$lib/server/database';
import { EmailSchema } from '$lib/utils/Valibot/EmailSchema';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { validateInputs } from '$lib/utils/validateInputs';
import { generateSessionToken } from '$lib/server/auth';

export const load: PageServerLoad = async (event) => {
	// IF NOT LOGGED IN, SHOW ERR PAGE LIKE ALL OTHER ROUTES THAT DONT EXIST
	if (event.locals.session === null || event.locals.user === null) {
		return error(401, 'Not Found');
	}

	try {
		const user = await db.user.findUnique({
			where: {
				id: event.locals.user.id
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true,
				Newsletter: true
			}
		});

		// IF NO USER FOUND IN DB, REDIRECT TO LOGIN
		if (!user) {
			return redirect(302, '/login');
		}

		return {
			user: {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				isSubscribed: !!user?.Newsletter
			}
		};
	} catch (err) {
		console.error('Error finding user:', err);
		return error(500, 'Something went wrong');
	}
};

export const actions: Actions = {
	updateUser: async ({ request, locals }) => {
		// IF NOT LOGGED IN, ERROR
		if (!locals.session || !locals.user) {
			return error(404, 'Not found');
		}

		const formData = await request.formData();
		const id = formData.get('id') as unknown as number;
		const key = formData.get('key') as string;
		let value = formData.get('value') as string | boolean;

		// CHECK DB IF EMAIL EXISTS
		if (key === 'email') {
			// validate email
			const validationResult = validateInputs(EmailSchema, { email: value });
			if (validationResult) {
				return validationResult; // Return the error response
			}

			let user;
			try {
				user = await db.user.findUnique({
					where: { email: value.toString() }
				});
			} catch (err) {
				console.error('Error finding user:', err);
				return error(500, 'Internal server error');
			}

			if (user) {
				return fail(400, { message: 'Email is unavailable' });
			}
		}

		if (key === 'isSubscribed') {
			// CONSIDER AN ATOMIC TRANSACTION BETWIXT THE USER AND THE NEWSLETTER TABLES
			// coerce to boolean
			value = value === 'true';

			// we have the user id so we can go ahead and create a newsletter record here
			// take email from storage since the user is logged in
			if (value) {
				try {
					await db.newsletter.create({
						data: { email: locals.user.email, userId: id, token: generateSessionToken() }
					});
				} catch (err) {
					console.error('Error creating newsletter:', err);
					return error(500, 'Internal server error');
				}
			} else {
				// otherwise lets always clean up the newsletter if the value is false for isSubscribed keys
				try {
					await db.newsletter.delete({
						where: { email: locals.user.email }
					});
				} catch (err) {
					console.error('Error deleting newsletter:', err);
					return error(500, 'Internal server error');
				}
			}
			// return because theres nothing to update on user side
			return { status: 200, message: `${key} updated!` };
		}

		try {
			await db.user.update({
				where: { id },
				data: { [key]: value }
			});

			return { status: 200, message: `${key} updated!` };
		} catch (err) {
			console.error('Error updating user:', err);
			return error(500, 'Internal server error');
		}
	},
	deleteAccount: async (event) => {
		if (event.locals.session === null || event.locals.user === null) {
			return error(404, 'Not found');
		}

		const formData = await event.request.formData();
		const id = formData.get('id') as unknown as number;
		const userEmail = formData.get('userEmail') as string;
		const typedEmail = formData.get('typedEmail') as string;

		if (userEmail !== typedEmail) {
			return fail(400, { message: 'Emails do not match' });
		}

		try {
			// Delete the user record
			const user = await db.user.delete({
				where: { id }
			});

			if (!user) {
				return fail(400, { message: 'User not found' });
			}

			// Log out the user
			await logout(event);

			// return redirect(302, '/');
		} catch (err) {
			console.error('Error deleting account:', err);
			return error(500, 'Internal server error');
		}
		return redirect(302, '/');
	}
};
