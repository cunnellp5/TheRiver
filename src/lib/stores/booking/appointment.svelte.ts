import { type CalendarDate, getLocalTimeZone } from "@internationalized/date";

function store() {
  let selectedDate = $state<CalendarDate | undefined>(undefined);
  let appointmentTime = $state<string | undefined>(undefined);
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

  function setAppointmentTime(time: string) {
    appointmentTime = time;
  }

  return {
    get selectedDate() { return selectedDate; },
    get date() { return formattedDate; },
    get time() { return appointmentTime; },
    setAppointmentDate,
    setAppointmentTime,
  };
};

export const AppointmentStore = store();
