import db from '$lib/server/database';
import { json, error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	let post;

	try {
		post = await db.post.findUnique({
			where: { slug: params.slug }
		});

		if (!post) {
			return error(404, 'Post not found');
		}

		return json(post);
	} catch (err) {
		const { message } = err as Error;
		return error(500, message);
	}
};

export const PATCH: RequestHandler = async ({ params, request, locals }): Promise<Response> => {
	// user must be logged in to update a post
	if (!locals.user && !locals.user?.isAdmin) {
		return error(401, { message: 'Unauthorized' });
	}

	let post;
	let postData;

	try {
		postData = await request.json();
	} catch (err) {
		return error(400, 'Invalid JSON');
	}

	try {
		post = await db.post.update({
			where: { slug: params.slug },
			data: postData
		});
	} catch (err: unknown | Error) {
		return error(500, (err as Error).message);
	}

	return json(post);
};
