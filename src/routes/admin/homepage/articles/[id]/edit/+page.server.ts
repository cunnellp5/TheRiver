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
