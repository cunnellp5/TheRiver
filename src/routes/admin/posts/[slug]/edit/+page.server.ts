// TODO use the client side views to render in admin portal, and ensure CRUD ui works along with reactive routing

import db from '$lib/server/database';
import slugify from '$lib/utils/slugify';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session || !locals?.user?.isAdmin) {
		return error(404, 'Not found');
	}

	return { user: locals.user };
};

export const actions: Actions = {
	default: async ({ request, params, locals }) => {
		if (!locals.user && !locals.user?.isAdmin) {
			return error(404, { message: 'Not found' });
		}

		const formData = await request.formData();

		const title = formData.get('title')?.toString();
		const content = formData.get('content');
		const tags = formData.get('tagInput');
		const description = formData.get('description');
		const published = formData.get('published') === 'on';

		if (!title || title === null) {
			return fail(400, { error: true, message: 'Invalid title' });
		}

		if (!content) {
			return fail(400, { error: true, message: 'Add content' });
		}

		if (!description) {
			return fail(400, { error: true, message: 'Something weird is going on, hmu' });
		}

		const slugified = slugify(title.toString());

		try {
			await db.post.update({
				where: { slug: params.slug.toString() },
				data: {
					title,
					content: content.toString(),
					tags: tags
						? tags
								.toString()
								.split(',')
								.map((tag: string) => tag.trim())
						: [],
					slug: slugified,
					description: description ? `${description.slice(0, 100)}...` : '',
					published: !!published
				}
			});
		} catch (err) {
			// TODO fix these error messages, (root cause is trying to create a new entry with the same title)
			const { message, code, meta } = err as Error;

			if (code === 'P2002') {
				return fail(400, { error: true, message: `Post with ${meta.target} already exists` });
			}

			throw new Error(message);
		}

		redirect(302, `/admin/posts/${slugified}`);
	}
};
