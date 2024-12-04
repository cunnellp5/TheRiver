// import db from '$lib/server/database';
// import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';

// // TODO Use the etsy api instead of rss feed
// export const load: PageServerLoad = async () => {
//   let url;
//   let text;

//   try {
//     const business = await db.businessInfo.findFirst();
//     url = business?.merchUrl;
//     text = business?.merchText;
//   } catch (err) {
//     return error(500, 'Internal Server Error');
//   }

//   return {
//     url,
//     text
//   };
// };
