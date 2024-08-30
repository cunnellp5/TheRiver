import db from '$lib/server/database';
import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

// eslint-disable-next-line consistent-return
export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session || !locals.user) {
		return error(404, 'Not found');
	}
};

// TODO investigate why i have to duplicate this logic
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
