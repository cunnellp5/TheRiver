import { lucia } from '$lib/server/auth';
import type { Cookies } from '@sveltejs/kit';

export async function login({
	userId,
	cookies
}: {
	userId: string;
	cookies: Cookies;
}): Promise<void> {
	const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});
}
