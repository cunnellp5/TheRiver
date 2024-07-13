import { fail, redirect, error } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/socialLinks');

	if (response.status === 404) {
		error(404, { message: 'No links found' });
	}

	const socialLinks = await response.json();

	return { socialLinks };
};

export const actions: Actions = {
	addLink: async (event) => {
		if (!event.locals.session) {
			redirect(302, '/login');
		}
		const formData = await event.request.formData();
		const title = formData.get('title');
		const url = formData.get('url');
		// TODO figure out how to upload icons or svgs?

		if (typeof title !== 'string' || title.length < 3 || title.length > 255) {
			return fail(400, {
				message: 'Invalid title'
			});
		}

		const link = await db.socialLinks.create({
			data: {
				title,
				url: url?.toString() || ''
			}
		});

		return {
			message: `Link to ${link.title} created`,
			socialLink: link
		};
	},
	deleteLink: async (event) => {
		if (!event.locals.session) {
			redirect(302, '/login');
		}

		const formData = await event.request.formData();
		const linkId = Number(formData.get('linkId'));

		if (!linkId) {
			return fail(400, {
				message: 'Invalid link id'
			});
		}

		await db.socialLinks.delete({
			where: {
				id: linkId
			}
		});

		return { message: 'link deleted' };
	}
};
