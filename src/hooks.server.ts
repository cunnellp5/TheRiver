// import { sequence } from '@sveltejs/kit/hooks';
import { error, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(lucia.sessionCookieName);

	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await lucia.validateSession(sessionId);

	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	event.locals.user = user;
	event.locals.session = session;

	if (
		(!event.locals.session && event.route.id?.includes('/admin')) ||
		(event.locals.session && !event.locals.user?.isAdmin && event.route.id?.includes('/admin'))
	) {
		error(404, 'Not Found');
	}

	return resolve(event);
};

// export const handle = sequence(authHandle);

// TODO add rate limiting to any CREATE/UPDATE pages
// TODO cache all 'readonly' pages
