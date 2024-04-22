import db from '$lib/server/database';
import type { Post } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';

// export const load: PageServerLoad = async ({ fetch }) => {
// 	const response = await fetch('/api/posts');
// 	const posts = await response.json();

// 	if (response.ok) {
// 		return { posts };
// 	}

// 	return error(response.status, posts.message);
// };
export const load: PageServerLoad = async ({ locals }) => {
	// TODO move this to an api endpoint to run filtering from the client
	try {
		const posts: Post[] = await db.post.findMany({
			// where: { published: true },
			orderBy: [{ updatedAt: 'desc' }, { createdAt: 'desc' }]
		});

		if (!posts) {
			return error(404, 'Posts not found.');
		}

		// TODO figure out how to cache data, this isnt working
		// setHeaders({
		// 	'Cache-Control': 'public, max-age=60, s-maxage=60'
		// });

		return {
			posts,
			isAdmin: locals?.user?.isAdmin
		};
	} catch (err) {
		const { message } = err as Error;
		throw new Error(message);
	}
};
