import { error, fail } from '@sveltejs/kit';
import type { Post } from '@prisma/client';
import type { PageServerLoad } from '../$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	const response = await fetch('/api/posts');

	if (!response.ok) {
		const errorMessage = await response.json();
		error(response.status, errorMessage);
	}

	const posts: Post[] = await response.json();

	return {
		posts,
		isAdmin: locals?.user?.isAdmin
	};
};

export const actions: Actions = {
	deletePost: async ({ fetch, request }) => {
		const formData = await request.formData();
		const slug = formData.get('slug');

		// TODO add message to top of page
		if (!slug) {
			return fail(400, {
				message: 'Invalid slug'
			});
		}

		const response = await fetch(`/api/posts/${slug}`, { method: 'DELETE' });

		if (!response.ok) {
			const errorMessage = await response.json();
			error(response.status, errorMessage);
		}

		return {
			success: true,
			message: 'Post deleted',
			deletedTitle: slug
		};
	}
};
