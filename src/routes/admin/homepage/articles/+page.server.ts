import { error, redirect, fail } from '@sveltejs/kit';
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
	deleteArticle: async (event) => {
		// TODO test me
		if (!event.locals.session) {
			throw new Error('Unauthorized access');
		}

		const formData = await event.request.formData();
		const articleId = Number(formData.get('articleId'));

		// TODO test me
		if (Number.isNaN(articleId) || articleId <= 0) {
			return fail(400, {
				message: 'Invalid article id'
			});
		}

		try {
			await db.article.delete({
				where: {
					id: articleId
				}
			});

			return {
				success: true,
				message: 'Article deleted'
			};
		} catch (err) {
			// TODO test me
			// log the error with some logger (sentry.io?)
			return fail(500, {
				message: 'An error occurred while deleting the article'
			});
		}
	}
};
