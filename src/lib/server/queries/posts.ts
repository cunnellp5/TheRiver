import { db } from '../database';

export async function getAllPosts() {
	return await db.post.findMany();
}
