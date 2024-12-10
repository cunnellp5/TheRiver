import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, depends }) => {
  depends("home:locals");

  return {
    isSignedIn: locals.session !== null,
    user: locals.user,
  };
};
