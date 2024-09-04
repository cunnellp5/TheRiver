import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';
// import { createHash } from 'crypto';

function generateNonce() {
	return crypto.randomUUID();
}

// // Function to generate an ETag based on the content
// function generateETag(content: string): string {
// 	return createHash('sha1').update(content).digest('hex');
// }

const headers: Handle = async ({ event, resolve }) => {
	const nonce = generateNonce();
	event.locals.nonce = nonce;

	const response = await resolve(event);

	// Set global headers
	// response.headers.set(
	// 	'Content-Security-Policy',
	// 	`default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self'; img-src 'self' https://res.cloudinary.com;`
	// );

	// Security Headers

	// Enforces secure (HTTPS) connections to the server.
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

	// Prevents the browser from MIME-sniffing a response away from the declared content-type.
	response.headers.set('X-Content-Type-Options', 'nosniff');

	// Prevents the page from being displayed in an iframe to mitigate clickjacking attacks.
	response.headers.set('X-Frame-Options', 'DENY');

	// Enables the Cross-Site Scripting (XSS) filter built into most browsers.
	response.headers.set('X-XSS-Protection', '1; mode=block');

	// Controls the sources from which content can be loaded, helping to prevent XSS attacks. (set in config)
	// response.headers.set(
	// 	'Content-Security-Policy',
	// 	"default-src 'self'; script-src 'self' 'unsafe-inline' https://apis.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://res.cloudinary.com; connect-src 'self' https://your-internal-api.com"
	// );

	// Controls how much referrer information is included with requests.
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	// Controls which features and APIs can be used in the browser.
	response.headers.set('Permissions-Policy', 'geolocation=(self), microphone=()');

	// Helps to prevent misissued certificates by requiring Certificate Transparency.
	response.headers.set(
		'Expect-CT',
		'max-age=86400, enforce, report-uri="https://your-report-uri.com"'
	);

	// Controls which features and APIs can be used in the browser (similar to Permissions-Policy).
	response.headers.set('Feature-Policy', "geolocation 'self'; microphone 'none'");

	// Performance Headers

	// Controls how, and for how long, the browser caches content.
	response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');

	// Provides a way to validate cached responses.
	// const responseBody = await response.text();
	// const etag = generateETag(responseBody);
	// response.headers.set('ETag', `W/"${etag}"`);

	// Informs caches that the response varies based on certain headers.
	response.headers.set('Vary', 'Accept-Encoding');

	return response;
};

const app: Handle = async ({ event, resolve }) => {
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

	return resolve(event);
};

const authGuard: Handle = async ({ event, resolve }) => {
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

// TODO add rate limiting to any CREATE/UPDATE pages
// TODO cache all 'readonly' pages

export const handle: Handle = sequence(headers, app, authGuard);
