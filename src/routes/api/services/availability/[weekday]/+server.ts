import db from "$lib/server/database";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }): Promise<Response> => {
  const { weekday } = params;

  const availability = await db.serviceProviderAvailability.findUnique({
    where: {
      dayOfTheWeek: Number(weekday),
      enabled: true,
    },
    select: {
      startTime: true,
      endTime: true,
      dayOfTheWeek: true,
    },
  });

  return json({ status: 200, availability });
};
