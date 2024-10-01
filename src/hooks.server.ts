import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { rateLimiter } from './middlewares/rateLimiter';
import { headers } from './middlewares/headers';
import { auth } from './middlewares/auth';
import { authGuard } from './middlewares/authGuard';

// TODO add rate limiting to any CREATE/UPDATE pages
// TODO cache all 'readonly' pages

export const handle: Handle = sequence(rateLimiter, headers, auth, authGuard);
