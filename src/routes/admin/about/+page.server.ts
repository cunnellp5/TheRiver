import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  try {
    const about = await db.about.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return { about };
  }
  catch {
    return error(500, "Internal Server Error");
  }
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const inputAbout = formData.get("about") as string;
    const inputTitle = formData.get("title") as string;
    const isShowing = (formData.get("isShowing") as string) === "true";
    const url = formData.get("url") as string;
    const id = formData.get("id") as string;

    try {
      await db.about.update({
        where: {
          id: Number(id),
        },
        data: {
          text: inputAbout,
          name: inputTitle,
          isShowing,
          url,
        },
      });
      return {
        message: "About updated",
      };
    }
    catch {
      // log the error with some logger (sentry.io?)
      return fail(500, {
        message: "An error occurred while updating an about section",
      });
    }
  },
};
