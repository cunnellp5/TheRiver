export default function getTimeFromDateTime(dateTime) {
  const date = new Date(dateTime);
  return { hours: date.getUTCHours(), minutes: date.getUTCMinutes() };
}
