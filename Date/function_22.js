function ISO_numeric_date(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}
