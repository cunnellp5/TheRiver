import { deleteSessionTokenCookie, invalidateSession } from '$lib/server/auth';
import type { RequestEvent } from '@sveltejs/kit';

export async function logout(event: RequestEvent): Promise<void> {
	if (event.locals.session == null) {
		return;
	}

	await invalidateSession(event.locals.session.id);
	deleteSessionTokenCookie(event);
}
