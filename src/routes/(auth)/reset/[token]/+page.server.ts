import db from '$lib/server/database';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { ValiError, parse } from 'valibot';
import { PasswordSchema } from '$lib/utils/Valibot/PassSchema';
import { Argon2id } from 'oslo/password';
import { logout } from '$lib/server/controllers/logout';
import type { PageServerLoad } from './$types';
import { login } from '$lib/server/controllers/login';

export const load: PageServerLoad = async (event) => {
	const { token } = event.params;

	let foundToken = null;

	try {
		foundToken = await db.resetPasswordSession.findFirst({
			where: { token }
		});
	} catch (err) {
		// TODO if an actual error, should consider doing something more helpful here
		redirect(302, '/reset');
	}
	// cannot redirect inside try catch!
	// if one doesnt exist or its stale, redirect
	if (!foundToken) {
		redirect(302, '/reset');
	}

	// find related user, and return the email at least
	let user = null;
	try {
		user = await db.user.findFirst({
			where: { id: foundToken.userId }
		});
	} catch (err) {
		// TODO if an actual error, should consider doing something more helpful here
		redirect(302, '/reset');
	}

	// cannot redirect inside try catch!
	if (!user) {
		redirect(302, '/reset');
	}

	return {
		status: 200,
		email: user.email
	};
};

// Instructions
// create an action to submit form data
// check if the token is valid
// check if the password is valid
// check if thats the same as the original password and show error
// delete the reset password session
// update the user's password
// redirect to login!

export const actions: Actions = {
	// eslint-disable-next-line consistent-return
	default: async (event) => {
		const formData = await event.request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirm = formData.get('confirm');

		if (!email || !password || !confirm || confirm !== password) {
			return fail(400, { message: 'Please fill out all fields' });
		}

		// TODO use ValidateInputs helper fn
		try {
			parse(PasswordSchema, {
				password,
				confirm
			});
		} catch (err) {
			const errors = err as ValiError<typeof PasswordSchema>;
			return fail(400, {
				message: errors.message
			});
		}

		let hashedPassword = null;

		try {
			hashedPassword = await new Argon2id().hash(password);
		} catch (err) {
			error(500, { message: 'Something unexpected occured' });
		}

		let existingUser = null;

		// Fetch user from the database, first grabbing user to atomically update DB
		try {
			existingUser = await db.user.findUnique({ where: { email } });
		} catch (err) {
			error(404, { message: 'User not found' });
		}

		if (!existingUser) {
			// return redirect(302, '/reset');
		}

		// Invalidate/delete old session if user is logged in
		if (event.locals.session) {
			await logout(event);
		}

		// Atomically update user and delete reset password session
		try {
			await db.$transaction([
				db.user.update({
					where: { email },
					data: { hashedPassword }
				}),
				db.resetPasswordSession.delete({
					where: { userId: existingUser.id }
				})
			]);
			// set session and log user in
			try {
				await login({ userId: existingUser.id, event });
			} catch (err) {
				error(500, { message: 'Failed to create session' });
			}
		} catch {
			error(500, { message: 'Failed to update user' });
		}

		return { status: 200, redirect: '/dashboard', message: 'Password updated' };
	}
};
