import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { error } from "@sveltejs/kit";

// export const load: PageServerLoad = async (event) => {
//   const serviceIds = event.url.searchParams.get("selectedServices");

//   if (!event.url.searchParams.get("selectedServices")) {
//     error(404, "No services found");
//   }

//   const ids = serviceIds?.split(",").map(Number);

//   let services;

//   try {
//     services = await db.service.findMany({
//       where: {
//         id: {
//           in: ids,
//         },
//       },
//     });
//   }
//   catch (err) {
//     error(500, err.message);
//   }

//   if (!services) {
//     error(404, "No services found");
//   }

//   return {
//     services,
//   };
// };

// export async function getAvailableTimeSlots(date) {
//   const selectedDate = new Date(date); // e.g., "2024-12-20"
//   const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

//   // Step 1: Get recurring availability for the day
//   const recurringAvailability = await db.serviceProviderAvailability.findMany({
//     where: { dayOfTheWeek: dayOfWeek },
//   });

//   // Step 2: Check if the selected date is blocked
//   const isBlocked = await db.blockDates.findFirst({
//     where: { date: selectedDate },
//   });

//   if (isBlocked) {
//     return []; // No slots available if the date is blocked
//   }

//   // Step 3: Get existing appointments for the date
//   const appointments = await db.appointments.findMany({
//     where: { date: selectedDate },
//     select: { startTime: true, endTime: true },
//   });

//   // Step 4: Generate all possible time slots based on recurring availability
//   const availableSlots = [];
//   for (const availability of recurringAvailability) {
//     const startTime = new Date(`${date}T${availability.startTime}`);
//     const endTime = new Date(`${date}T${availability.endTime}`);

//     // Generate 30-minute intervals
//     let currentTime = startTime;
//     while (currentTime < endTime) {
//       const slotEndTime = new Date(currentTime);
//       slotEndTime.setMinutes(currentTime.getMinutes() + 30);

//       // Check if the slot overlaps with any booked appointments
//       const isSlotTaken = appointments.some(
//         appointment =>
//           currentTime < new Date(appointment.endTime)
//           && slotEndTime > new Date(appointment.startTime),
//       );

//       if (!isSlotTaken) {
//         availableSlots.push(currentTime.toISOString());
//       }

//       currentTime = slotEndTime; // Move to the next slot
//     }
//   }

//   return availableSlots; // Return available time slots as ISO strings
// }
