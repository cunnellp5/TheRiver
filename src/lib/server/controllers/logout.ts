import { lucia } from '$lib/server/auth';
import type { Cookies } from '@sveltejs/kit';

export async function logout({
	locals,
	cookies
}: {
	locals: App.Locals;
	cookies: Cookies;
}): Promise<void> {
	if (!locals.session) {
		return;
	}

	await lucia.invalidateSession(locals.session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});
}
