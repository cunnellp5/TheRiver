import { error, type Handle, redirect } from "@sveltejs/kit";

export const authGuard: Handle = async ({ event, resolve }) => {
  if (
    (event.locals.session === null && event.route.id?.includes("/admin"))
    || (event.locals.session
      && event.locals.user?.isAdmin === null
      && event.route.id?.includes("/admin"))
  ) {
    error(401, "Not Found");
  }

  // generic user logged in and navigates to login page
  if (event.locals.session && event.route.id?.includes("/login")) {
    redirect(302, "/");
  }

  // generic user logged in and navigates to signup page
  if (event.locals.session && event.route.id?.includes("/signup")) {
    redirect(302, "/");
  }

  return resolve(event);
};
