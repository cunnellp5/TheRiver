import type { Session } from "@prisma/client";
import { invalidateSession } from "$lib/server/auth";

export async function handleUserSession(sessions: Session[]): Promise<void> {
  // check if session is expired, delete it if it is
  // TODO consider using auth helper
  // const token = event.cookies.get("session") ?? null;
  // await validateSessionToken(token);
  if (sessions.length > 0) {
    const session = sessions[0];
    if (session.expiresAt < new Date()) {
      await invalidateSession(session.id);
    }
  }
}
