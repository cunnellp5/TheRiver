// import { lucia } from '$lib/server/auth';
// import type { Handle } from '@sveltejs/kit';

// export const auth: Handle = async ({ event, resolve }) => {
// 	const sessionId = event.cookies.get(lucia.sessionCookieName);

// 	if (!sessionId) {
// 		event.locals.user = null;
// 		event.locals.session = null;
// 		return resolve(event);
// 	}

// 	const { session, user } = await lucia.validateSession(sessionId);

// 	if (session && session.fresh) {
// 		const sessionCookie = lucia.createSessionCookie(session.id);

// 		event.cookies.set(sessionCookie.name, sessionCookie.value, {
// 			path: '.',
// 			...sessionCookie.attributes
// 		});
// 	}

// 	if (!session) {
// 		const sessionCookie = lucia.createBlankSessionCookie();

// 		event.cookies.set(sessionCookie.name, sessionCookie.value, {
// 			path: '.',
// 			...sessionCookie.attributes
// 		});
// 	}

// 	event.locals.user = user;
// 	event.locals.session = session;

// 	return resolve(event);
// };

import {
	validateSessionToken,
	setSessionTokenCookie,
	deleteSessionTokenCookie
} from '$lib/server/auth';

import type { Handle } from '@sveltejs/kit';

export const auth: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session') ?? null;
	if (token === null) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await validateSessionToken(token);
	if (session !== null) {
		setSessionTokenCookie(event, token, session.expiresAt);
	} else {
		deleteSessionTokenCookie(event);
	}

	event.locals.session = session;
	event.locals.user = user;
	return resolve(event);
};
