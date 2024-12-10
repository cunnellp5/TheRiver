import type { Actions, PageServerLoad } from "./$types";
import { logout } from "$lib/server/controllers/logout";
import { error, fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (event.locals.session == null) {
    return error(404, "Not Found");
  }
  await logout(event);
};

// This is an action triggered from the nav bar:
// 1. remove session
// 2. show toast message
// 3. redirect to home page
export const actions: Actions = {
  default: async (event) => {
    if (event.locals.session == null) {
      return fail(404);
    }

    await logout(event);

    return redirect(302, "/");
  },
};
