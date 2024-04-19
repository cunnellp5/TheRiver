import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia } from 'lucia';
import { dev } from '$app/environment';

import db from './database';

const adapter = new PrismaAdapter(db.session, db.user);

interface DtatbaseUserAttributes {
	isAdmin: boolean;
}

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (user) => ({
		isAdmin: user.isAdmin
	})
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DtatbaseUserAttributes;
	}
}
