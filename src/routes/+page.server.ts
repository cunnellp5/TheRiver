import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";
import db from "$lib/server/database";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  // TODO store urls in db - cdn can be public, but make sure the modifiers are on the urls
  let articles = null;
  // let about;

  try {
    articles = await db.article.findMany();
  }
  catch (err) {
    return error(500, "Internal Server Error");
  }

  // try {
  //   about = await db.about.findFirst({
  //     where: { name: "home" },
  //   });
  // }
  // catch (err) {
  //   return error(500, "Internal Server Error");
  // }

  return { articles };
};
