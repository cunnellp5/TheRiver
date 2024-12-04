import type { Post } from "@prisma/client";
import type { LayoutServerLoad } from "../../$types";
import db from "$lib/server/database";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async () => {
  // TODO move this to an api endpoint to run filtering from the client??
  try {
    const posts: Post[] = await db.post.findMany({
      where: { published: true },
      orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
    });

    if (!posts) {
      // TODO maybe dont throw an error, just return an empty array
      return error(404, "Posts not found.");
    }

    // TODO figure out how to cache data, this isnt working
    // setHeaders({
    // 	'Cache-Control': 'public, max-age=60, s-maxage=60'
    // });

    return { posts };
  }
  catch (err) {
    const { message } = err as Error;
    return error(500, message);
  }
};
