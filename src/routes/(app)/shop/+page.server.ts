// import { DOMParser } from 'xmldom';
import type { PageServerLoad } from './$types';
import db from '$lib/server/database';
import { error } from '@sveltejs/kit';

// TODO Use the etsy api instead of rss feed
export const load: PageServerLoad = async (event) => {
	let url;
	let text;

	const response = await event.fetch('https://www.etsy.com/shop/TheRiverDesign/rss');
	const xmlText = await response.text();

	// Parse the XML string using xmldom
	// const parser = new DOMParser();
	// const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

	// Example: Accessing elements
	// const items = xmlDoc.getElementsByTagName('item');
	// const data = Array.from(items).map((item) => ({
	// 	title: item.getElementsByTagName('title')[0]?.textContent,
	// 	guid: item.getElementsByTagName('guid')[0]?.textContent,
	// 	description: item.getElementsByTagName('description')[0]?.textContent,
	// 	pubDate: item.getElementsByTagName('pubDate')[0]?.textContent
	// }));

	try {
		const business = await db.businessInfo.findFirst();
		url = business?.merchUrl;
		text = business?.merchText;
	} catch (err) {
		return error(500, 'Internal Server Error');
	}

	return {
		feed: [],
		url,
		text
	};
};
