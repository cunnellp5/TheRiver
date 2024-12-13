// src/routes/api/services/csv/+server.ts
import type { RequestHandler } from "@sveltejs/kit";
import db from "$lib/server/database";
import { servicesMapper } from "$lib/utils/services-mapper";

function generateCSV(services: any[]): string {
  const headers = ["Name", "Description", "Price", "Duration", "Booking Talley", "Category"];
  const serviceSections = [];

  for (const property in services) {
    const group = [property.toString()];
    const rows = services[property].map((service: any) => [
      service.name,
      service.description,
      service.price,
      service.duration,
      service.bookingTalley,
      service.category.name,
    ]);
    const sectionContent = [group, headers, ...rows].map(e => e.join(",")).join("\n");
    serviceSections.push(sectionContent);
  }

  const csvContent = serviceSections.join("\n\n");
  return csvContent;
}

export const POST: RequestHandler = async ({ request }) => {
  const { services } = await request.json();

  const csvContent = generateCSV(services);

  return new Response(csvContent, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=services.csv",
    },
  });
};
