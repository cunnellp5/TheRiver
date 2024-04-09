import { dev } from '$app/environment';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia } from 'lucia';

import db from './database';

const adapter = new PrismaAdapter(db.session, db.user);

interface DtatbaseUserAttributes {
	username: string;
	name: string;
	email: string;
	isSubscribed: boolean;
}

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
			name: attributes.name,
			email: attributes.email,
			isSubscribed: attributes.isSubscribed
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DtatbaseUserAttributes;
	}
}
