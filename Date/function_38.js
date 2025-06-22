function isDaylightSavingTime(date) {
  const january = new Date(date.getFullYear(), 0, 1);
  const july = new Date(date.getFullYear(), 6, 1);
  const stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
  return date.getTimezoneOffset() < stdTimezoneOffset;
}
