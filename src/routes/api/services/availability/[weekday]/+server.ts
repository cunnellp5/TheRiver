import db from "$lib/server/database";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }): Promise<Response> => {
  const { weekday } = params;

  const availability = await db.serviceProviderAvailability.findUniqueOrThrow({
    where: { dayOfTheWeek: Number(weekday) },
  });

  return json({ status: 200, availability });
};
