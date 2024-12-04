import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { servicesMapper } from "$lib/utils/servicesMapper";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session || !event.locals.user) {
    return error(404, "Not found");
  }

  try {
    // GET ALL SERVICES WITH THEY CATEGORIES
    const services = await db.service.findMany({
      include: {
        category: true,
      },
    });

    // FORMAT SUCH THAT IT CAN BE USED IN THE TABLE
    const remappedServices = servicesMapper(services);

    return { services: remappedServices };
  }
  catch (err) {
    return error(500, "Internal Server Error");
  }
};
