import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => {
	return {
		isSignedIn: locals.session !== null
	};
};
