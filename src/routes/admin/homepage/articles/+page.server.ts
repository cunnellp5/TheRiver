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
	createArticle: async (event) => {
		console.log(event);
		// if (!event.locals.session) {
		// 	redirect(302, '/login');
		// }
		const formData = await event.request.formData();
		console.log(formData, 'formdatum');
		// const title = formData.get('title');
		// const url = formData.get('url');
		// // TODO figure out how to upload icons or svgs?

		// if (typeof title !== 'string' || title.length < 3 || title.length > 255) {
		// 	return fail(400, {
		// 		message: 'Invalid title'
		// 	});
		// }

		// const link = await db.article.create({
		// 	data: {
		// 		title,
		// 		url: url?.toString() || ''
		// 	}
		// });

		// return {
		// 	message: `Link to ${link.title} created`,
		// 	socialLink: link
		// };
	}
};
