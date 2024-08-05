import type { Actions } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import market from '$lib/data/json/market.json';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const inputUrl = formData.get('inputUrl') as string;
		const inputText = formData.get('inputText') as string;

		market.url = inputUrl;
		market.text = inputText;

		// Define the path to the file
		const filePath = path.join(process.cwd(), './src/lib/data/json/market.json');

		// Create the data object to be written
		const data = JSON.parse(JSON.stringify(market));

		// Write the data to the file
		fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
			if (err) {
				// SHOW ERROR ON THE PAGE
				console.error('Error writing file:', err);
			} else {
				// SHOW TOAST
				console.log('File has been saved.');
			}
		});
	}
};
