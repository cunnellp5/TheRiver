import { error, redirect, fail } from '@sveltejs/kit';
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
			throw new Error('Unauthorized access');
		}

		const formData = await event.request.formData();
		const articleId = Number(formData.get('articleId'));
		const linkTitle = formData.get('linkTitle') as string;
		const contentMessage = formData.get('contentMessage') as string;

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
					linkTitle,
					contentMessage
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
