import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import db from '$lib/server/database';

export const GET: RequestHandler = async (event) => {
	const posts = await db.post.findMany();

	event.setHeaders({
		'Cache-Control': 'public, max-age=60, s-maxage=60'
	});

	return json(posts);
};
