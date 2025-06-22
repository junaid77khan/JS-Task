function diff_days(dt1, dt2) {
  const diffMs = Math.abs(dt2 - dt1);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}
