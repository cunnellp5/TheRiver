import { db } from '../database';
import type { User } from '@prisma/client';

export const createUser = async (user: User) => {
	const newUser = await db.user.create({
		data: {
			profile: {
				create: {
					email: user.email?.toString() || '',
					firstName: user.firstName?.toString() || '',
					lastName: user.lastName?.toString() || '',
					isSubscribed: Boolean(user.isSubscribed) || false
				}
			},
			hashedPassword: user.hashedPassword
		},
		include: {
			profile: true
		}
	});

	return newUser;
};

export const getUsers = async () => {
	return db.user.findMany();
};

export const getUserById = async (id: string) => {
	return db.user.findUnique({ where: { id } });
};

export const updateUser = async (id: string, user: User) => {
	return db.user.update({ where: { id }, data: user });
};

export const deleteUser = async (id: string) => {
	return db.user.delete({ where: { id } });
};

// get user profiles
export const getUserProfiles = async () => {
	return db.profile.findMany();
};
