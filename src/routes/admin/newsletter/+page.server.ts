import db from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Component } from 'svelte';
import NewsLetterBasic from '$lib/emails/templates/NewsLetterBasic.svelte';
import Welcome from '$lib/emails/templates/Welcome.svelte';
import { render } from '../../api/emails/render';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => {
	if (!locals.session || !locals.user || !locals.user.isAdmin) {
		return error(404, 'Not found');
	}

	const newsLetter = await db.newsletter.findMany();

	return {
		newsLetter,
		html: render({
			template: Welcome as Component
		})
	};
};
