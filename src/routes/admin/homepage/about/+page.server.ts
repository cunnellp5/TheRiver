import type { Actions } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import about from '$lib/data/json/about.json';

interface AboutData {
	home: string;
	music: string;
	service: string;
	market: string;
	blog: string;
	contact: string;
	announcement: string;
	contactData: {
		email: string;
		location: string;
	};
	[key: string]: string | { email: string; location: string };
}

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const inputAbout = formData.get('about') as string;
		const inputTitle = formData.get('title') as string;

		console.log(inputAbout, 'saving abouts');

		// Define the path to the file
		const filePath = path.join(process.cwd(), './src/lib/data/json/about.json');

		// Create the data object to be written
		(about as AboutData)[inputTitle.toLowerCase()] = inputAbout;
		const data = JSON.parse(JSON.stringify(about));

		// Write the data to the file
		fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
			if (err) {
				// SHOW ERROR ON THE PAGE
				console.error('Error writing file:', err);
			} else {
				// SHOW SOME TOAST
				console.log('File has been saved.');
			}
		});
	}
};
