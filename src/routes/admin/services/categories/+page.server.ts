// import type { Service } from '@prisma/client';
import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { error } from "@sveltejs/kit";

// type TableServiceInfo = Record<string, Service[]>;

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  try {
    const categories = await db.serviceCategory.findMany({});

    return { categories };
  }
  catch (err) {
    return error(500, "Internal Server Error");
  }
};
