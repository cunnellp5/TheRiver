import db from '$lib/server/database';
import type { ArticleValidator } from '$lib/utils/Valibot/ArticleSchema';
import { ArticleSchema } from '$lib/utils/Valibot/ArticleSchema';
import { error, fail } from '@sveltejs/kit';
import { ValiError, flatten, parse } from 'valibot';
import type { Actions } from './$types';

export const actions: Actions = {
	// 1. check user is logged in and admin
	// 2. get form data
	// 3. validate form data
	// 4. create article
	// 5. return success or error message

	default: async (event) => {
		if (!event.locals.session || !event.locals.user?.isAdmin) {
			return error(401, 'Unauthorized');
		}

		const formData = await event.request.formData();

		const article = {
			articleTitle: (formData.get('articleTitle') as string) || '',
			author: (formData.get('author') as string) || '',
			description: (formData.get('description') as string) || '',
			img: (formData.get('img') as string) || '',
			link: (formData.get('link') as string) || ''
		};

		// Input validations
		try {
			parse(ArticleSchema, {
				articleTitle: article.articleTitle,
				author: article.author,
				description: article.description,
				img: article.img,
				link: article.link
			}) as ArticleValidator;
		} catch (err) {
			const errors = err as ValiError<typeof ArticleSchema>;
			const issues = flatten(errors.issues);

			// return error message defined by validation schema
			return fail(400, {
				fail: true,
				message: errors.message,
				error: {
					articleTitle: issues.nested?.articleTitle,
					author: issues.nested?.author,
					description: issues.nested?.description,
					img: issues.nested?.img,
					link: issues.nested?.link
				}
			});
		}

		try {
			await db.article.create({
				data: {
					articleTitle: article.articleTitle,
					author: article.author,
					description: article.description,
					img: article.img,
					link: article.link
				}
			});
			return {
				success: true,
				message: 'Article created successfully'
			};
		} catch (err) {
			return {
				dbError: true,
				error: err,
				message: 'Error creating article'
			};
		}
	}
};
