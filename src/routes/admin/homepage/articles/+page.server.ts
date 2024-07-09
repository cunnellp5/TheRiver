import { fail, redirect, error } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

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
