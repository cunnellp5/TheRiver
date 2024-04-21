import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type DummyPost = {
	title: string;
	body: string;
	tags: string[];
	slug: string;
};

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts/');
	const { posts } = await response.json();

	return posts as DummyPost[];
}

function slugify(text: string) {
	return text
		.toLowerCase()
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '');
}

async function main() {
	const posts = await getPosts();

	const data = posts.map((post) => ({
		title: post.title,
		content: post.body,
		slug: slugify(post.title),
		tags: post.tags,
		description: `${post.body.slice(0, 100)}...`
	}));

	await db.post.createMany({ data });
}

main();
