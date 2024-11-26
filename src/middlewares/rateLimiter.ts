import { RefillingTokenBucket } from '$lib/server/rate-limit';
import type { Handle } from '@sveltejs/kit';
// import { RateLimiterMemory, RateLimiterRes } from 'rate-limiter-flexible';

// function setRateLimiterHeaders(
// 	response: Response,
// 	options: RateLimiterMemory,
// 	rateLimiterRes: RateLimiterRes,
// 	appendText: string = ''
// ) {
// 	response.headers.set(
// 		'Retry-After' + appendText,
// 		JSON.stringify(rateLimiterRes.msBeforeNext / 1000)
// 	);
// 	response.headers.set('X-RateLimit-Limit' + appendText, JSON.stringify(options.points));
// 	response.headers.set(
// 		'X-RateLimit-Remaining' + appendText,
// 		rateLimiterRes.remainingPoints.toString()
// 	);
// 	response.headers.set(
// 		'X-RateLimit-Reset' + appendText,
// 		new Date(Date.now() + rateLimiterRes.msBeforeNext).toString()
// 	);
// }

// Rate limiter configuration
// const rateLimiterMemory = new RateLimiterMemory({
// 	points: 18,
// 	duration: 1
// });

// const errorRateLimiter = new RateLimiterMemory({
// 	points: 15,
// 	duration: 60
// });

// export const rateLimiter: Handle = async ({ event, resolve }) => {
// 	const ip = event.getClientAddress();

// 	try {
// 		const rateLimiterRes = await rateLimiterMemory.consume(ip, 1);
// 		const response = await resolve(event);

// 		// Check if the response is an error page
// 		if (response.status >= 400) {
// 			try {
// 				const errRateLimiterRes = await errorRateLimiter.consume(ip, 1);
// 				setRateLimiterHeaders(response, errorRateLimiter, errRateLimiterRes, '-Error');
// 			} catch {
// 				return new Response('Too Many Requests', { status: 429 });
// 			}
// 		}

// 		// Rate Limiter headers
// 		setRateLimiterHeaders(response, rateLimiterMemory, rateLimiterRes);

// 		return response;
// 	} catch {
// 		return new Response('Too Many Requests', { status: 429 });
// 	}
// };

const bucket = new RefillingTokenBucket<string>(100, 1);

export const rateLimiter: Handle = async ({ event, resolve }) => {
	// Note: Assumes X-Forwarded-For will always be defined.
	const clientIP = event.request.headers.get('X-Forwarded-For');
	if (clientIP === null) {
		return resolve(event);
	}
	let cost: number;
	if (event.request.method === 'GET' || event.request.method === 'OPTIONS') {
		cost = 1;
	} else {
		cost = 3;
	}
	if (!bucket.consume(clientIP, cost)) {
		return new Response('Too many requests', {
			status: 429
		});
	}
	return resolve(event);
};
