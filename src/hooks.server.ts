// import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// this is how i cache something on a cdn
	// event.setHeaders({
	// 	'Cache-Control': 'public, max-age=60, s-maxage=60'
	// });

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

	// BELOW RUNS BEFORE THE ADMIN ROUTE LOADS AND FALLS BACK TO ROOT OF APPLICATION
	// TECHNICALLY DOING THIS WILL CLUE YOU INTO THE FACT THE ROUTE EXISTS
	// if (
	// 	(!event.locals.session && event.route.id?.includes('/admin')) ||
	// 	(event.locals.session && !event.locals.user?.isAdmin && event.route.id?.includes('/admin'))
	// ) {
	// 	error(404, 'Not Found');
	// }

	// generic user logged in and navigates to login page
	if (event.locals.session && event.route.id?.includes('/login')) {
		redirect(302, '/');
	}
	// generic user logged in and navigates to signup page
	if (event.locals.session && event.route.id?.includes('/signup')) {
		redirect(302, '/');
	}

	return resolve(event);
};

// export const handle = sequence(authHandle);

// TODO add rate limiting to any CREATE/UPDATE pages
// TODO cache all 'readonly' pages
