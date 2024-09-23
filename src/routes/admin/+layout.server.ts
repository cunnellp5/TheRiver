import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }: { locals: App.Locals }) => {
	if (!locals.session || !locals.user || !locals.user.isAdmin) {
		return error(404, 'Not found');
	}

	return {
		user: locals.user
	};
};
