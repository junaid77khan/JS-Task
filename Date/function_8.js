function date_diff_indays(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const diffTime = Math.abs(dt2 - dt1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
