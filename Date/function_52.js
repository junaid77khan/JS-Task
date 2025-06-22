function getWeekEndDate(date) {
  const givenDate = new Date(date);
  const day = givenDate.getDay();
  const diff = 7 - day;
  givenDate.setDate(givenDate.getDate() + diff - 1);
  return givenDate;
}
