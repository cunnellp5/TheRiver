import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { servicesMapper } from "$lib/utils/services-mapper";
import { type Actions, error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  const id = event.params.id;
  let service, categories;

  try {
    service = await db.service.findUniqueOrThrow({
      where: { id: Number(id) },
      include: { category: true },
    });
  }
  catch {
    return error(500, "Internal Server Error");
  }

  try {
    categories = await db.serviceCategory.findMany();
  }
  catch {
    return error(500, "Internal Server Error");
  }

  return { categories, service };
};

export const actions: Actions = {
  updateService: async ({ request, params }) => {
    const formData = await request.formData();
    const categoryId = formData.get("categoryId") as unknown as number;
    let name = formData.get("name") as string;
    let description = formData.get("description") as string;
    const price = formData.get("price") as unknown as number;
    const duration = formData.get("duration") as unknown as number;
    const id = params.id;

    description = description.replace(",", " ");
    name = name.replace(",", " ");

    try {
      await db.service.update({
        where: { id: Number(id) },
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
  deleteService: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id") as unknown as number;

    try {
      await db.service.delete({
        where: { id: Number(id) },
      });
    }
    catch {
      // todo handle error
      return fail(400, { message: "Failed to create service" });
    }

    return { success: true };
  },
};
