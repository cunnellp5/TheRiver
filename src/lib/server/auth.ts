import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia } from 'lucia';
import { dev } from '$app/environment';

import db from './database';

const adapter = new PrismaAdapter(db.session, db.user);

interface DtatbaseUserAttributes {
	isAdmin?: boolean;
	firstName: string;
	lastName: string;
	email: string;
}

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (user) => {
		let userData = {
			isAdmin: user.isAdmin,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email
		};

		if (!user.isAdmin) {
			delete userData?.isAdmin;
		}
		return userData;
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DtatbaseUserAttributes;
	}
}
