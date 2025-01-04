// import { formatTime } from "$lib/utils/format-time";
// import { type CalendarDate, getDayOfWeek, Time } from "@internationalized/date";

// export async function getAvailableTimeSlots(
//   date: CalendarDate,
//   timeIntervalMin = 30,
// ) {
//   const dayOfWeek = getDayOfWeek(date, "en-US"); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

//   // Step 1: Get recurring availability for the day
//   let recurringAvailability;

//   try {
//     const response = await fetch(`/api/services/availability/${dayOfWeek}`);
//     recurringAvailability = await response.json();
//   }
//   catch (error) {}

//   // Convert times to Time objects
//   const startTime = new Time(recurringAvailability.availability.startTime);
//   const endTime = new Time(recurringAvailability.availability.endTime);

//   console.log({ startTime, endTime });

//   // // Step 2: Check if the selected date is blocked
//   // const isBlocked = await db.blockDates.findFirst({
//   //   where: { date: selectedDate },
//   // });

//   // if (isBlocked) {
//   //   return []; // No slots available if the date is blocked
//   // }

//   // // Step 3: Get existing appointments for the date
//   // const appointments = await db.appointments.findMany({
//   //   where: { date: selectedDate },
//   //   select: { startTime: true, endTime: true },
//   // });

//   // Step 4: Generate all possible time slots based on recurring availability

//   // Generate intervals
//   const availableSlots = [];
//   let currentTime = startTime;

//   while (currentTime.compare(endTime) < 0) {
//     // Check if the slot overlaps with any booked appointments
//     // const isSlotTaken = appointments.some(
//     //   appointment =>
//     //     currentTime < new Date(appointment.endTime)
//     //     && slotEndTime > new Date(appointment.startTime),
//     // );
//     // if (!isSlotTaken) {
//       // }

//     availableSlots.push(currentTime.toString());
//     currentTime = currentTime.add({ minutes: timeIntervalMin });
//   }

//   return availableSlots; // Return available time slots as ISO strings
// }

import {
  type CalendarDate,
  getDayOfWeek,
  getLocalTimeZone,
  parseTime,
  Time,
  toCalendarDateTime,
} from "@internationalized/date";

export async function generateTimeSlots(
  date: CalendarDate,
  timeIntervalMin = 30,
) {
  // console.log(date, "date from genterate-time-lot");
  const calendarDate = toCalendarDateTime(date);
  const dayOfWeek = getDayOfWeek(date, "en-US");
  let data;

  try {
    const response = await fetch(`/api/services/availability/${dayOfWeek}`);
    data = await response.json();
  }
  catch (error) {}

  const startTime = parseTime(data.availability.startTime);
  const endTime = parseTime(data.availability.endTime);

  const availableSlots = [];
  let currentTime = startTime;

  while (currentTime.compare(endTime) < 0) {
    const hour = currentTime.hour;
    const dateTime = toCalendarDateTime(calendarDate, currentTime).toDate(getLocalTimeZone());
    availableSlots.push({
      time: currentTime,
      formatted: dateTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      period: hour < 12
        ? "morning"
        : hour < 17 ? "afternoon" : "evening",
    });
    currentTime = currentTime.add({ minutes: timeIntervalMin });
  }

  return availableSlots;
}
