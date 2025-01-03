import { formatTime } from "$lib/utils/format-time";

export async function getAvailableTimeSlots(date, timeIntervalMin = 30) {
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Step 1: Get recurring availability for the day
  let recurringAvailability;
  try {
    const response = await fetch(`/api/services/availability/${dayOfWeek}`);
    recurringAvailability = await response.json();
  }
  catch (error) {}

  const availableStartTime = new Date(recurringAvailability.availability.startTime).getHours();
  const availableEndTime = new Date(recurringAvailability.availability.endTime).getHours();

  console.log({ availableStartTime, availableEndTime });

  // // Step 2: Check if the selected date is blocked
  // const isBlocked = await db.blockDates.findFirst({
  //   where: { date: selectedDate },
  // });

  // if (isBlocked) {
  //   return []; // No slots available if the date is blocked
  // }

  // // Step 3: Get existing appointments for the date
  // const appointments = await db.appointments.findMany({
  //   where: { date: selectedDate },
  //   select: { startTime: true, endTime: true },
  // });

  // Step 4: Generate all possible time slots based on recurring availability
  const availableSlots = [];
  const startTime = new Date(new Date(date).setHours(availableStartTime));
  const endTime = new Date(new Date(date).setHours(availableEndTime));

  console.log({ startTime, endTime });
  //
  // Generate 30-minute intervals
  let currentTime = startTime;
  while (currentTime < endTime) {
    const slotEndTime = new Date(currentTime);
    slotEndTime.setMinutes(currentTime.getMinutes() + timeIntervalMin);

    // Check if the slot overlaps with any booked appointments
    // const isSlotTaken = appointments.some(
    //   appointment =>
    //     currentTime < new Date(appointment.endTime)
    //     && slotEndTime > new Date(appointment.startTime),
    // );

    // if (!isSlotTaken) {
    availableSlots.push(formatTime(currentTime));
    // }

    currentTime = slotEndTime; // Move to the next slot
  }

  return availableSlots; // Return available time slots as ISO strings
}
