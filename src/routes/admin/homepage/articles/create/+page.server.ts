import { error, redirect, fail } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			redirect(302, '/login');
		}

		const formData = await event.request.formData();

		const article = {
			articleImgUrl: (formData.get('articleImgUrl') as string) || '',
			contentMessage: (formData.get('contentMessage') as string) || '',
			contentAuthor: (formData.get('contentAuthor') as string) || '',
			linkUrl: (formData.get('linkUrl') as string) || '',
			linkTitle: (formData.get('linkTitle') as string) || ''
		};

		console.log(article, 'ARTICLE');
		// TODO handle validation errors
		// TODO ensure the fall back values render something other than a skeleton loader (probably want to avoid empty strings)

		await db.article.create({
			data: {
				articleImgUrl: article.articleImgUrl,
				contentMessage: article.contentMessage,
				contentAuthor: article.contentAuthor,
				linkUrl: article.linkUrl,
				linkTitle: article.linkTitle
			}
		});

		// const submitForm = async () => {
		// 	// Example POST request to your API endpoint
		// 	const response = await fetch('/api/articles', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify(article)
		// 	});

		// 	if (response.ok) {
		// 		// Handle success response
		// 		console.log('Article submitted successfully');
		// 		// Optionally, clear the form or redirect the user
		// 	} else {
		// 		// Handle error response
		// 		console.error('Failed to submit article');
		// 	}
		// };
	}
};
