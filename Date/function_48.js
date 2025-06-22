function diff_months(dt1, dt2) {
  const year1 = dt1.getFullYear();
  const year2 = dt2.getFullYear();
  const month1 = dt1.getMonth();
  const month2 = dt2.getMonth();
  return Math.abs((year2 - year1) * 12 + (month2 - month1));
}
