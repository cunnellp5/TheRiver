import db from '$lib/server/database';
import { json, error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	let post;

	try {
		post = await db.post.findUnique({
			where: { slug: params.slug }
		});
	} catch (err: unknown | Error) {
		error(500, (err as Error).message);
	}

	if (!post) {
		error(404, 'Post not found');
	}

	return json(post);
};

export const DELETE: RequestHandler = async ({ params }): Promise<Response> => {
	try {
		await db.post.delete({
			where: { slug: params.slug }
		});
	} catch (err: unknown | Error) {
		error(500, (err as Error).message);
	}

	return json({ status: 204 });
};
