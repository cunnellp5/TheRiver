// leaving here just in case i get wild and want to make this work

import { redirect, type Handle } from '@sveltejs/kit';

// temporarily rm auth guard, it wasnt helping
export const authGuard: Handle = async ({ event, resolve }) => {
	// BELOW RUNS BEFORE THE ADMIN ROUTE LOADS AND FALLS BACK TO ROOT OF APPLICATION
	// TECHNICALLY DOING THIS WILL CLUE YOU INTO THE FACT THE ROUTE EXISTS
	// if (
	// 	(!event.locals.session && event.route.id?.includes('/admin')) ||
	// 	(event.locals.session && !event.locals.user?.isAdmin && event.route.id?.includes('/admin'))
	// ) {
	// 	error(404, 'Not Found');
	// }

	// generic user logged in and navigates to login page
	if (event.locals.session && event.route.id?.includes('/login')) {
		redirect(302, '/');
	}

	// generic user logged in and navigates to signup page
	if (event.locals.session && event.route.id?.includes('/signup')) {
		redirect(302, '/');
	}

	return resolve(event);
};
