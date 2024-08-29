import { PrismaClient, type Service } from '@prisma/client';
import { Argon2id } from 'oslo/password';
import slugify from '$lib/utils/slugify';

import articlesData from './seedData/articlesData';
import serviceCategories from './seedData/serviceCategories';
import serviceHairCutData from './seedData/serviceHairCutData';
import serviceHairColorData from './seedData/serviceHairColorData';
import serviceHairAddOnData from './seedData/serviceHairAddOnData';
import serviceNewClientData from './seedData/serviceNewClientData';
import serviceNailData from './seedData/serviceNailData';
import aboutData from './seedData/aboutData';

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

async function main() {
	await db.$transaction(async (db) => {
		// DELETE ALL DATA
		await db.article.deleteMany();
		await db.service.deleteMany();
		await db.serviceCategory.deleteMany();
		await db.user.deleteMany();
		await db.post.deleteMany();
		await db.about.deleteMany();

		// FETCH POSTS FROM API
		const posts = await getPosts();

		// BUILDING POST DATA
		const data = posts.map((post, i) => ({
			title: post.title,
			content: post.body,
			slug: slugify(post.title),
			tags: post.tags,
			description: `${post.body.slice(0, 100)}...`,
			published: i % 2 === 0
		}));

		// PUT POSTS IN DB
		await db.post.createMany({ data });

		// 1. Create haircut Category/Services
		const hairCutCategory = await db.serviceCategory.create({ data: serviceCategories[2] });
		await db.service.createMany({
			data: serviceHairCutData.map((service) => ({ ...service, categoryId: hairCutCategory.id }))
		});

		// 2. create Hair color category/services
		const hairColorCategory = await db.serviceCategory.create({ data: serviceCategories[1] });
		await db.service.createMany({
			data: serviceHairColorData.map((service) => ({
				...service,
				categoryId: hairColorCategory.id
			}))
		});

		// 3. create Hair Add-on category/services
		const hairAddOnCategory = await db.serviceCategory.create({ data: serviceCategories[0] });
		await db.service.createMany({
			data: serviceHairAddOnData.map((service) => ({
				...service,
				categoryId: hairAddOnCategory.id
			}))
		});

		// 4. create New Client category/services
		const newClientCategory = await db.serviceCategory.create({ data: serviceCategories[3] });
		await db.service.create({
			data: {
				...serviceNewClientData,
				categoryId: newClientCategory.id
			}
		});

		// 5. create Nails category/services
		const NailsCategory = await db.serviceCategory.create({ data: serviceCategories[4] });
		await db.service.createMany({
			data: serviceNailData.map((service) => ({ ...service, categoryId: NailsCategory.id }))
		});
		// *************

		// 2. Relate services to categories then create from seedData
		// await db.service.createMany({
		// 	data: servicesData
		// });

		// BEGIN CREATEING SEED USER
		const hashedPassword = await new Argon2id().hash('12345678');
		await db.user.create({
			data: {
				email: 'test@example.com',
				firstName: 'philly',
				lastName: 'phil',
				hashedPassword,
				isAdmin: true
			}
		});
		const hashedPassword2 = await new Argon2id().hash('changeMePlease');
		await db.user.create({
			data: {
				email: 'theriverrunsfast@gmail.com',
				firstName: 'Alexis',
				lastName: 'Coose',
				hashedPassword: hashedPassword2,
				isAdmin: true
			}
		});

		// ARTICLES SEEDS
		await db.article.createMany({
			data: articlesData
		});

		// About SEEDS
		await db.about.createMany({
			data: aboutData
		});
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
