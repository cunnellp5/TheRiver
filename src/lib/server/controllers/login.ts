import { generateSessionToken, createSession, setSessionTokenCookie } from '$lib/server/auth';
import type { RequestEvent } from '@sveltejs/kit';

export async function login({
	userId,
	event
}: {
	userId: number;
	event: RequestEvent;
}): Promise<void> {
	const token = generateSessionToken();

	const session = await createSession(token, userId);

	setSessionTokenCookie(event, token, session.expiresAt);
}
