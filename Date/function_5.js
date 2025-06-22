function compare_dates(date1, date2) {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  if (time1 === time2) return "Date1 = Date2";
  if (time1 > time2) return "Date1 > Date2";
  return "Date2 > Date1";
}
