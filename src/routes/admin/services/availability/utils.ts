export interface DayAvailability {
  dayOfTheWeek: number;
  dayName: string;
  startTime: string;
  endTime: string;
  enabled: boolean;
}

export const DEFAULT_TIMES = {
  start: "09:00",
  end: "17:00",
};

export const DAYS_OF_WEEK = [
  { value: 0, name: "Sunday" },
  { value: 1, name: "Monday" },
  { value: 2, name: "Tuesday" },
  { value: 3, name: "Wednesday" },
  { value: 4, name: "Thursday" },
  { value: 5, name: "Friday" },
  { value: 6, name: "Saturday" },
];
