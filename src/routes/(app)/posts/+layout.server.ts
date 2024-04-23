import db from '$lib/server/database';
import type { Post } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async () => {
	// TODO move this to an api endpoint to run filtering from the client??
	try {
		const posts: Post[] = await db.post.findMany({
			where: { published: true },
			orderBy: [{ updatedAt: 'desc' }, { createdAt: 'desc' }]
		});

		if (!posts) {
			return error(404, 'Posts not found.');
		}

		// TODO figure out how to cache data, this isnt working
		// setHeaders({
		// 	'Cache-Control': 'public, max-age=60, s-maxage=60'
		// });

		return { posts };
	} catch (err) {
		const { message } = err as Error;
		throw new Error(message);
	}
};
