import type { Post } from '@prisma/client';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	const response = await fetch('/api/posts');

	const posts: Post[] = await response.json();

	return {
		posts,
		isAdmin: locals?.user?.isAdmin
	};
};
