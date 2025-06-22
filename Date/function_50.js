function getWeekStartDate(date) {
  const givenDate = new Date(date);
  const day = givenDate.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  givenDate.setDate(givenDate.getDate() + diff);
  return givenDate;
}
