import db from '$lib/server/database';
import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const post = await db.post.findUnique({
		where: { slug: params.slug }
	});

	return json(post);
};
