import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Post = {
	title: string;
	body: string;
	tags: string[];
	slug: string;
};

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts/');
	const { posts } = await response.json();

	return posts as Post[];
}

function slugify(text: string) {
	return text
		.toLowerCase()
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '');
}

async function main() {
	const posts = await getPosts();

	for (const post of posts) {
		await db.post.create({
			data: {
				title: post.title,
				content: post.body,
				slug: slugify(post.title),
				tags: post.tags
			}
		});
	}
}

main();
