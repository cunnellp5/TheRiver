import { error, fail } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const articles = await db.article.findMany();
		return { articles };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};

export const actions: Actions = {
	// 1. Make sure admin user is logged in and admin
	// 2. get ID from form data
	// 3. validate ID
	// 4. delete article
	// 5. return success message
	// 6. notify user of deletion

	deleteArticle: async (event) => {
		if (!event.locals.session || !event.locals.user?.isAdmin) {
			throw new Error('Unauthorized');
		}

		const formData = await event.request.formData();
		const articleId = Number(formData.get('articleId'));

		if (Number.isNaN(articleId) || articleId <= 0) {
			return fail(400, {
				message: 'Invalid ID'
			});
		}

		try {
			await db.article.delete({
				where: {
					id: articleId
				}
			});
			return {
				deleteSuccess: true,
				message: 'Article deleted'
			};
		} catch (err) {
			// log the error with some logger (sentry.io?)
			return fail(500, {
				message: 'An error occurred while deleting the article'
			});
		}
	}
};
