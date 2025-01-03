import db from "$lib/server/database";
import formatToISO from "$lib/utils/format-iso";
import getTimeFromDateTime from "$lib/utils/get-time-from-datetime";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
  const { availability } = await request.json();

  const upserts = availability.map(({ dayOfTheWeek, startTime, endTime }: { dayOfTheWeek: number; startTime: string; endTime: string }) =>
    db.serviceProviderAvailability.upsert({
      where: { dayOfTheWeek },
      update: {
        startTime: formatToISO("1969-4-20", startTime),
        endTime: formatToISO("1969-4-20", endTime),
      },
      create: { dayOfTheWeek, startTime, endTime },
    }),
  );

  await Promise.all(upserts);

  return json({ status: 200, message: "yay." });
};
