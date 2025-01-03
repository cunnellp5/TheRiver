export const appointmentStore = {
  date: $state<Date | undefined>(undefined),
  time: $state<number | undefined>(undefined),
  endTime: $state<string | undefined>(undefined),
  setDateTime: (date: Date) => { /* ... */ },
  calculateEndTime: () => { /* ... */ },
};
