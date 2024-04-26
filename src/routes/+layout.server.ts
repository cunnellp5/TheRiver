import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }: { locals: App.Locals }) => ({
	isSignedIn: locals.session !== null
});
