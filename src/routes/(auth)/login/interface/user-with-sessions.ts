import type { Session, User } from "@prisma/client";

export interface UserWithSessions extends User {
  sessions: Session[];
}
