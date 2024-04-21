import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const post = await db.post.findUnique({
			where: { slug: params.slug }
		});

		if (!post) {
			return error(404, 'Post not found');
		}

		return {
			post,
			isAdmin: locals?.user?.isAdmin
		};
	} catch (err) {
		const { message } = err as Error;
		return error(500, message);
	}
};
