import db from '$lib/server/database';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async (event) => {
	const { token } = event.params;

	let foundToken = null;

	try {
		foundToken = await db.resetPasswordSession.findFirst({
			where: { token, expiresAt: { gt: new Date() } }
		});

		// if one doesnt exist or its stale, redirect
		if (!foundToken) {
			redirect(302, '/auth/reset');
		}
	} catch (error) {
		// TODO if an actual error, should consider doing something more helpful here
		redirect(302, '/auth/reset');
	}

	// find related user, and return the email at least

	let user = null;
	try {
		user = await db.user.findFirst({
			where: { id: foundToken.userId }
		});

		if (!user) {
			redirect(302, '/auth/reset');
		}
	} catch (error) {
		// TODO if an actual error, should consider doing something more helpful here
		redirect(302, '/auth/reset');
	}

	return {
		status: 200,
		email: user.email
	};
};
