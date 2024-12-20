export default function formatToISO(date, time) {
  const [hours, minutes] = time.split(":");
  const formattedDate = new Date(date);
  formattedDate.setHours(hours, minutes, 0, 0);
  return formattedDate.toISOString();
}
