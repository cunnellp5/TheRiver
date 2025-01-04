import db from "$lib/server/database";
import { parseTime } from "@internationalized/date";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async (): Promise<Response> => {
  const availability = await db.serviceProviderAvailability.findMany({
    select: {
      dayOfTheWeek: true,
      startTime: true,
      endTime: true,
      enabled: true,
    },
  });
  return json({ status: 200, availability });
};

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
  const data = await request.json();
  const availability = data.availability;

  const upserts = availability.map(({
    dayOfTheWeek,
    startTime,
    endTime,
    enabled,
  }: {
    dayOfTheWeek: number;
    startTime: string;
    endTime: string;
    enabled: boolean;
  }) => {
    const start = startTime ? parseTime(startTime).toString() : "";
    const end = endTime ? parseTime(endTime).toString() : "";

    return db.serviceProviderAvailability.upsert({
      where: { dayOfTheWeek },
      update: {
        startTime: start,
        endTime: end,
        enabled,
      },
      create: {
        dayOfTheWeek,
        startTime: start,
        endTime: end,
        enabled,
      },
    });
  });

  await Promise.all(upserts);

  return json({ status: 200, message: "Availability updated" });
};
