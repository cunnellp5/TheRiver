import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { servicesMapper } from "$lib/utils/services-mapper";
import { type Actions, error, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  let services;
  let remappedServices;
  let about;

  try {
    services = await db.service.findMany({
      include: {
        category: true,
      },
    });
    if (!services)
      return error(404, "No services found");
    remappedServices = servicesMapper(services);
  }
  catch (err) {
    return error(500, err.message);
  }

  try {
    about = await db.about.findFirst({
      where: {
        name: "services",
      },
    });
  }
  catch (err) {
    return error(500, err.message);
  }

  return {
    remappedServices,
    services,
    about,
  };
};
