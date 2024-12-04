import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  const serviceIds = event.url.searchParams.get("selectedServices");

  if (!event.url.searchParams.get("selectedServices")) {
    error(404, "No services found");
  }

  const ids = serviceIds?.split(",").map(Number);

  let services;

  try {
    services = await db.service.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
  catch (err) {
    error(500, err.message);
  }

  if (!services) {
    error(404, "No services found");
  }

  return {
    services,
  };
};
