import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }: { locals: App.Locals }) => ({
  isSignedIn: locals.session !== null,
  user: locals.user,
});
