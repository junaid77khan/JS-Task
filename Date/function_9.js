function lastday(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
