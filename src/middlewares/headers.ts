import type { Handle } from '@sveltejs/kit';

// // Function to generate an ETag based on the content
// function generateETag(content: string): string {
// 	return createHash('sha1').update(content).digest('hex');
// }

function generateNonce() {
	return crypto.randomUUID();
}

export const headers: Handle = async ({ event, resolve }) => {
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
	response.headers.set('Referrer-Policy', 'same-origin');

	// Controls which features and APIs can be used in the browser.
	response.headers.set('Permissions-Policy', 'geolocation=(self), microphone=()');

	// Helps to prevent misissued certificates by requiring Certificate Transparency.
	response.headers.set(
		'Expect-CT',
		'max-age=86400, enforce, report-uri="https://your-report-uri.com"'
	);

	// Controls which features and APIs can be used in the browser (similar to Permissions-Policy).
	response.headers.set('Permissions-Policy', 'geolocation=(self), microphone=()');

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
