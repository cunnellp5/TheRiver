import type { Actions, PageServerLoad } from "./$types";
import db from "$lib/server/database";
import slugify from "$lib/utils/slugify";
import { error, fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.user) {
    return error(404, "Not found");
  }

  return {
    isAdmin: event.locals.user.isAdmin,
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title")?.toString();
    const content = formData.get("content");
    const tags = formData.get("tagInput");
    const description = formData.get("description");
    const published = formData.get("published") === "on";

    if (!title || title === null) {
      return fail(400, { error: true, message: "Invalid title" });
    }

    if (!content) {
      return fail(400, { error: true, message: "Add content" });
    }

    if (!description) {
      return fail(400, { error: true, message: "Something weird is going on, hmu" });
    }

    const slugified = slugify(title.toString());

    const slicedDescription = description ? `${description.slice(0, 100)}...` : "";

    try {
      await db.post.create({
        data: {
          title,
          content: content.toString(),
          tags: tags
            ? tags
              .toString()
              .split(",")
              .map((tag: string) => tag.trim())
            : [],
          slug: slugified,
          description: slicedDescription,
          published: !!published,
        },
      });
    }
    catch (err) {
      // TODO fix these error messages, (root cause is trying to create a new entry with the same title)
      const { message, code, meta } = err as Error;

      if (code === "P2002") {
        return fail(400, { error: true, message: `Post with ${meta.target} already exists` });
      }

      throw new Error(message);
    }

    redirect(302, `/admin/posts/${slugified}`);
  },
};
