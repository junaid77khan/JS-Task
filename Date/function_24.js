function ISO8601_week_no(date) {
  const target = new Date(date.valueOf());
  const dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const jan4 = new Date(target.getFullYear(), 0, 4);
  const weekDiff = (target - jan4) / (1000 * 60 * 60 * 24 * 7);
  return 1 + Math.floor(weekDiff);
}
