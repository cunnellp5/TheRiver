import db from '$lib/server/database';
import slugify from '$lib/utils/slugify';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	createPost: async ({ request }) => {
		const formData = await request.formData();

		const title = formData?.get('title')?.toString().trim();
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
				content: content.toString(),
				tags: tags
					? tags
							.toString()
							.split(',')
							.map((tag: string) => tag.trim())
					: [],
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
			return {
				success: true,
				message: 'Post deleted',
				deletedTitle: slug
			};
		} catch (err) {
			const { message } = err as Error;
			throw new Error(message); // unexpected error
		}
	}
};
