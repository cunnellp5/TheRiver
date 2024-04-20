import db from '$lib/server/database';
import slugify from '$lib/utils/slugify';
import type { Post } from '@prisma/client';
import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	const response = await fetch('/api/posts');

	if (!response.ok) {
		const errorMessage = await response.json();
		error(response.status, errorMessage); // this is an expected error
	}

	const posts: Post[] = await response.json();

	return {
		posts,
		isAdmin: locals?.user?.isAdmin
	};
};

export const actions: Actions = {
	createPost: async ({ request }) => {
		const formData = await request.formData();

		const title = formData?.get('title')?.trim();
		const content = formData.get('content');
		const tags = formData.get('tagInput');

		if (!title) {
			return fail(400, { message: 'Invalid title' });
		}

		if (!content) {
			return fail(400, { message: 'Add content' });
		}

		const slugified = slugify(title);

		const post = await db.post.create({
			data: {
				title,
				content,
				tags: tags ? tags.split(',').map((tag: string) => tag.trim()) : [],
				slug: slugified
			}
		});

		return {
			success: true,
			message: 'Post created',
			createdTitle: post.title
		};
	},

	deletePost: async ({ request }) => {
		const formData = await request.formData();
		const slug = formData.get('slug');

		// TODO add message to top of page
		if (!slug) {
			// fail throws action error
			return fail(400, {
				message: 'Invalid slug'
			});
		}

		try {
			await db.post.delete({
				where: { slug: slug.toString() }
			});
			return { success: true };
		} catch (err) {
			const { message } = err as Error;
			throw new Error(message); // unexpected
		}
	}
};
