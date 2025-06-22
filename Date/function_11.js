function max_date(dates) {
  let max = dates[0];
  for (let i = 1; i < dates.length; i++) {
    if (new Date(dates[i]) > new Date(max)) {
      max = dates[i];
    }
  }
  return max;
}
