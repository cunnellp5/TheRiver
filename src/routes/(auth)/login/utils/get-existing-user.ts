import type { UserWithSessions } from "../interface/user-with-sessions";
import db from "$lib/server/database";

export async function getExistingUser(email: string): Promise<UserWithSessions | null> {
  return await db.user.findUnique({
    where: { email: email.toString() },
    include: { sessions: true },
  });
}
