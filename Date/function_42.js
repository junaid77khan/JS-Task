function add_weeks(date, weeks) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + weeks * 7);
  return newDate;
}
