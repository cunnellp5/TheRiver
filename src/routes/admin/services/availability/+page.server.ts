import type { PageServerLoad } from "./$types";
import type { DayAvailability } from "./utils";
import { fail } from "@sveltejs/kit";
import { DAYS_OF_WEEK, DEFAULT_TIMES } from "./utils";

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch("/api/services/availability");
  const data = await response.json();
  const dbAvailability = data.availability;

  const availability = DAYS_OF_WEEK.map(day => ({
    dayOfTheWeek: day.value,
    dayName: day.name,
    startTime: dbAvailability.find(a => a.dayOfTheWeek === day.value)?.startTime ?? DEFAULT_TIMES.start,
    endTime: dbAvailability.find(a => a.dayOfTheWeek === day.value)?.endTime ?? DEFAULT_TIMES.end,
    enabled: dbAvailability.find(a => a.dayOfTheWeek === day.value)?.enabled ?? false,
  }));

  return { availability };
};

export const actions = {
  saveAvailability: async ({ request, fetch }) => {
    const formData = await request.formData();
    const availability = JSON.parse(formData.get("availability") as string) as DayAvailability[];
    const enabledDays = availability?.filter(a => a.enabled) ?? [];

    if (enabledDays.length === 0) {
      return fail(400, { message: "Please select at least one day with availability." });
    }

    if (availability.some(a => a.startTime && a.endTime && a.startTime >= a.endTime)) {
      return fail(400, { message: "Start time must be earlier than end time!" });
    }

    const response = await fetch("/api/services/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ availability }),
    });

    if (response.ok) {
      return { success: true, message: "Availability saved" };
    }
    else {
      return fail(400, { message: "Failed to save availability." });
    }
  },
};
