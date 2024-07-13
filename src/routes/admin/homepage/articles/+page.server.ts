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
		if (!event.locals.session) {
			redirect(302, '/login');
		}

		const formData = await event.request.formData();
		const articleId = Number(formData.get('articleId'));

		// TODO add delete message in UI
		if (!articleId) {
			return fail(400, {
				message: 'Invalid article id'
			});
		}

		await db.article.delete({
			where: {
				id: articleId
			}
		});

		return { message: 'Article deleted' };
	}
};
