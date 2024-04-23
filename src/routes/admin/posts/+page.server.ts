import db from '$lib/server/database';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	deletePost: async ({ request }) => {
		const formData = await request.formData();
		const slug = formData.get('slug');

		if (!slug) {
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
