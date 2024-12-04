import type { ArticleValidator } from "$lib/utils/Valibot/ArticleSchema";
import type { ValiError } from "valibot";
import type { Actions, PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { ArticleSchema } from "$lib/utils/Valibot/ArticleSchema";
import { error, fail } from "@sveltejs/kit";
import { flatten, parse } from "valibot";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  try {
    const article = await db.article.findUnique({
      where: {
        id: Number(event.params.id),
      },
    });

    if (!article) {
      return error(404, "Article not found");
    }

    return { article };
  }
  catch (err) {
    return error(500, "Internal Server Error");
  }
};

// TODO FINISH THIS
export const actions: Actions = {
  // 1. check user is logged in and admin
  // 2. get article ID and validate it
  // 2. get form data
  // 3. validate form data
  // 4. create article
  // 5. return success or error message

  default: async (event) => {
    if (!event.locals.session || !event.locals.user?.isAdmin) {
      return error(401, "Unauthorized");
    }

    const articleId = Number(event.params.id);

    // TODO how should this really be handled?
    if (Number.isNaN(articleId) || articleId <= 0) {
      return fail(400, {
        message: "Invalid article id",
      });
    }

    const formData = await event.request.formData();

    const articleTitle = (formData.get("articleTitle") as string) || "";
    const author = (formData.get("author") as string) || "";
    const description = (formData.get("description") as string) || "";
    const img = (formData.get("img") as string) || "";
    const link = (formData.get("link") as string) || "";

    // Input validations
    try {
      parse(ArticleSchema, {
        articleTitle,
        author,
        description,
        img,
        link,
      }) as ArticleValidator;
    }
    catch (err) {
      const errors = err as ValiError<typeof ArticleSchema>;
      const issues = flatten(errors.issues);

      // return error message defined by validation schema
      return fail(400, {
        fail: true,
        message: errors.message,
        error: {
          articleTitle: issues.nested?.articleTitle,
          author: issues.nested?.author,
          description: issues.nested?.description,
          img: issues.nested?.img,
          link: issues.nested?.link,
        },
      });
    }

    try {
      await db.article.update({
        where: {
          id: articleId,
        },
        data: {
          articleTitle,
          author,
          description,
          img,
          link,
        },
      });

      return {
        success: true,
        message: "Article updated",
      };
    }
    catch (err) {
      // TODO actually sort this out please
      // log the error with some logger (sentry.io?)
      return fail(500, {
        message: "An error occurred while updating the article",
      });
    }
  },
};
