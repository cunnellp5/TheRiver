import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { db } from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const post = await db.post.findUnique({
		where: { slug: params.slug }
	});

	console.log(post);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};
