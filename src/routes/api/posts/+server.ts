import type { RequestHandler } from '@sveltejs/kit';
import { error, json } from '@sveltejs/kit';

import db from '$lib/server/database';

// THIS API ROUTE STAYS SO WE CAN DO FILTERING / SORTING / PAGINATION
export const GET: RequestHandler = async (event): Promise<Response> => {
	let posts;

	try {
		posts = await db.post.findMany({
			orderBy: [{ updatedAt: 'desc' }, { createdAt: 'desc' }]
		});
	} catch (err: unknown | Error) {
		error(500, (err as Error).message);
	}

	if (!posts) {
		error(404, 'Posts not found.');
	}

	event.setHeaders({
		'Cache-Control': 'public, max-age=60, s-maxage=60'
	});

	return json(posts);
};
