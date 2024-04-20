import db from '$lib/server/database';
import { json, error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, locals }) => {
	if (!locals.user) {
		return error(401, 'Unauthorized');
	}

	let post;

	try {
		post = await db.post.findUnique({
			where: { slug: params.slug }
		});

		if (!post) {
			return error(404, 'Post not found');
		}

		return json(post);
	} catch (err: unknown | Error) {
		return error(500, (err as Error).message);
	}
};

export const DELETE: RequestHandler = async ({ params }): Promise<Response> => {
	try {
		await db.post.delete({
			where: { slug: params.slug }
		});
	} catch (err: unknown | Error) {
		return error(500, (err as Error).message);
	}

	return json({ status: 204 });
};

export const PATCH: RequestHandler = async ({ params, request }): Promise<Response> => {
	let post;
	let postData;

	try {
		postData = await request.json();
	} catch (err) {
		console.error(err);
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
