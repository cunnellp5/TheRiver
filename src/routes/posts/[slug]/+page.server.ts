import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const response = await fetch('/api/posts/' + params.slug);

	const post = await response.json();

	if (!post) {
		// maybe redirect instead? but that might be confusing
		error(404, 'Post not found');
	}

	// return json(post);
	return { post };
};
