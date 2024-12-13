import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { servicesMapper } from "$lib/utils/services-mapper";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  try {
    const services = await db.service.findMany({
      include: {
        category: true,
      },
    });
    const remappedServices = servicesMapper(services);
    return { services: remappedServices };
  }
  catch {
    return error(500, "Internal Server Error");
  }
};
