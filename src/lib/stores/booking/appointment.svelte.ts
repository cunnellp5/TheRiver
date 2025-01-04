import { ServiceStore } from "$lib/stores/booking/service.svelte";
import { type CalendarDate, getLocalTimeZone } from "@internationalized/date";

const FULL_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

function store() {
  let selectedDate = $state<CalendarDate | undefined>(undefined);
  const appointmentTime = $state<number | undefined>(undefined);
  const formattedDate = $derived(
    selectedDate
      ? new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(selectedDate.toDate(getLocalTimeZone()))
      : undefined,
  );

  function setAppointmentDate(date: CalendarDate) {
    selectedDate = date;
  }

  return {
    get date() {
      return formattedDate;
    },
    get time() {
      return appointmentTime;
    },
    setAppointmentDate,
  };
};

export const AppointmentStore = store();
