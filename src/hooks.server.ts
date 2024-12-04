import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { auth } from "./middlewares/auth";
import { authGuard } from "./middlewares/authGuard";
import { headers } from "./middlewares/headers";
import { rateLimiter } from "./middlewares/rateLimiter";

// TODO add rate limiting to any CREATE/UPDATE pages
// TODO cache all 'readonly' pages

export const handle: Handle = sequence(rateLimiter, headers, auth, authGuard);
