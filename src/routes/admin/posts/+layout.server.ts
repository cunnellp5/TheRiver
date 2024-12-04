import type { Post } from "@prisma/client";
import type { LayoutServerLoad } from "./$types";
import db from "$lib/server/database";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals }: { locals: App.Locals }) => {
  if (!locals.session || !locals.user) {
    return error(404, "Not found");
  }

  try {
    const posts: Post[] = await db.post.findMany({
      orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
    });

    if (!posts) {
      return error(404, "Posts not found.");
    }

    return {
      posts,
      isAdmin: locals?.user?.isAdmin,
    };
  }
  catch (err) {
    const { message } = err as Error;
    throw new Error(message);
  }
};
