import { error, fail, redirect } from '@sveltejs/kit';
import slugify from '$lib/utils/slugify';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ fetch, params, locals }) => {
	const response = await fetch(`/api/posts/${params.slug}`);

	if (!response.ok) {
		return error(response.status, 'Failed to fetch post');
	}

	const post = await response.json();

	if (!post) {
		error(404, 'Post not found');
	}

	return {
		post,
		isAdmin: locals?.user?.isAdmin
	};
};

export const actions: Actions = {
	default: async ({ fetch, request, params }) => {
		const { slug } = params;

		const formData = await request.formData();
		const title = formData.get('title')?.toString();
		const content = formData.get('content');
		const tags = formData.get('tagInput')?.toString();

		if (!slug) {
			error(400, 'Invalid slug');
		}

		if (!title) {
			return fail(400, { message: 'Invalid title' });
		}

		if (!content) {
			return fail(400, { message: 'Add content' });
		}

		const slugified = slugify(title);

		const response = await fetch(`/api/posts/${slug}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				content,
				tags: tags?.split(',').map((tag: string) => tag.trim()),
				slug: slugified
			})
		});

		if (response.ok) {
			return redirect(302, `/posts/${slugified}`);
		}
		const errorMessage = await response.json();
		error(response.status, errorMessage);
	}
};

// TODO
// trim white spaces in title
// add links for duplicate tags to show all posts with that tag
// add create new post
// add sorting and filtering capabilities?
// add layout navigation here to show all posts | unpublished posts | drafts | etc
// play with making posts look like a mobile friendly cool gallery
