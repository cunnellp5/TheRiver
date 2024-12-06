import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { auth } from "./hooks/auth";
import { authGuard } from "./hooks/auth-guard";
import { headers } from "./hooks/headers";
import { rateLimiter } from "./hooks/rate-limiter";

// TODO add rate limiting to any CREATE/UPDATE pages
// TODO cache all 'readonly' pages

export const handle: Handle = sequence(rateLimiter, headers, auth, authGuard);
