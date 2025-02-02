import type { Handle } from "@sveltejs/kit";
import {
  deleteSessionTokenCookie,
  setSessionTokenCookie,
  validateSessionToken,
} from "$lib/server/auth";
// import { memoize } from "$lib/utils/memoize";

// const memoizedValidateSessionToken = memoize(validateSessionToken);

export const auth: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("session") ?? null;

  if (token === null) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }

  const { session, user } = await validateSessionToken(token);
  // const { session, user } = await memoizedValidateSessionToken(token, 3600);

  if (session !== null) {
    setSessionTokenCookie(event, token, session.expiresAt);
  }
  else {
    deleteSessionTokenCookie(event);
  }

  event.locals.session = session;
  event.locals.user = user;
  return resolve(event);
};
