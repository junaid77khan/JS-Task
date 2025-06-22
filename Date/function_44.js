function diff_minutes(dt1, dt2) {
  const diffMs = Math.abs(dt2 - dt1);
  return Math.floor(diffMs / (1000 * 60));
}
