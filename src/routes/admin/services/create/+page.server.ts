import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { type Actions, error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }
  try {
    const categories = await db.serviceCategory.findMany();
    return { categories };
  }
  catch {
    return error(500, "Internal Server Error");
  }
};

export const actions: Actions = {
  createService: async ({ request }) => {
    const formData = await request.formData();
    const categoryId = formData.get("categoryId") as unknown as number;
    let name = formData.get("name") as string;
    let description = formData.get("description") as string;
    const price = formData.get("price") as unknown as number;
    const duration = formData.get("duration") as unknown as number;

    description = description.replace(",", " ");
    name = name.replace(",", " ");

    try {
      await db.service.create({
        data: {
          name,
          description,
          price: Number(price),
          duration: Number(duration),
          categoryId: Number(categoryId),
        },
      });
    }
    catch {
      // todo handle error
      return fail(400, { message: "Failed to create service" });
    }

    return { success: true };
  },
};
