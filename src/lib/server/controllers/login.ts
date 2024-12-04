import type { RequestEvent } from "@sveltejs/kit";
import { createSession, generateSessionToken, setSessionTokenCookie } from "$lib/server/auth";

export async function login({
  userId,
  event,
}: {
  userId: number;
  event: RequestEvent;
}): Promise<void> {
  const token = generateSessionToken();

  const session = await createSession(token, userId);

  setSessionTokenCookie(event, token, session.expiresAt);
}
