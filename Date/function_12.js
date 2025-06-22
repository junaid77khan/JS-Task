function min_date(dates) {
  let min = dates[0];
  for (let i = 1; i < dates.length; i++) {
    if (new Date(dates[i]) < new Date(min)) {
      min = dates[i];
    }
  }
  return min;
}
