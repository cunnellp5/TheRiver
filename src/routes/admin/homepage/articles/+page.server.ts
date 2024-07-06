import { fail, redirect, error } from '@sveltejs/kit';
import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session || !event.locals.user) {
		return error(404, 'Not found');
	}
	return null;
};
