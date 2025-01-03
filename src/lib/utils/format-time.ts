interface FormattedTime {
  formattedTime: string;
  period: string;
  date: Date;
  hours24: number;
}

export function formatTime(date: Date): FormattedTime {
  const hours24 = new Date(date).getHours();
  const minutes = new Date(date).getMinutes().toString().padStart(2, "0");

  const hours12 = hours24 % 12 || 12;
  const period = hours24 < 12 ? "AM" : "PM";

  return {
    formattedTime: `${hours12}:${minutes}`,
    period,
    date,
    hours24,
  };
}
