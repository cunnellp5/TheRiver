import type { RequestEvent } from "@sveltejs/kit";
import { deleteSessionTokenCookie, invalidateSession } from "$lib/server/auth";

export async function logout(event: RequestEvent): Promise<void> {
  if (event.locals.session == null) {
    return;
  }

  await invalidateSession(event.locals.session.id);

  deleteSessionTokenCookie(event);
}
