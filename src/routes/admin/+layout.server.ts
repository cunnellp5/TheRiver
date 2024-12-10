import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.session || !locals.user || !locals.user.isAdmin) {
    return error(404, "Not found");
  }

  return {
    user: locals.user,
  };
};
