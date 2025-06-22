function diff_years(dt1, dt2) {
  const diff = Math.abs(dt2 - dt1);
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  return Math.floor(diff / msInYear);
}
