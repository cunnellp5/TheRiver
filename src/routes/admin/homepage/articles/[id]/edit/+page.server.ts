import { error, fail } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}

	try {
		const article = await db.article.findUnique({
			where: {
				id: Number(event.params.id)
			}
		});

		if (!article) {
			return error(404, 'Article not found');
		}

		return { article };
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
};

// TODO FINISH THIS
export const actions: Actions = {
	updateArticle: async (event) => {
		// TODO test me
		if (!event.locals.session) {
			return error(401, 'Unauthorized');
		}

		const formData = await event.request.formData();
		const articleId = Number(formData.get('articleId'));
		const articleTitle = formData.get('articleTitle') as string;
		const description = formData.get('description') as string;

		// TODO test me
		if (Number.isNaN(articleId) || articleId <= 0) {
			return fail(400, {
				message: 'Invalid article id'
			});
		}

		// TODO test me
		if (!title || !content) {
			return fail(400, {
				message: 'Title and content are required'
			});
		}

		try {
			await db.article.update({
				where: {
					id: articleId
				},
				data: {
					articleTitle,
					description
				}
			});

			return {
				success: true,
				message: 'Article updated'
			};
		} catch (err) {
			// TODO test me
			// log the error with some logger (sentry.io?)
			return fail(500, {
				message: 'An error occurred while updating the article'
			});
		}
	}
};
