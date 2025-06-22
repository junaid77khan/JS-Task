function is_weekend(date_str) {
  const date = new Date(date_str);
  const day = date.getDay();
  if (day === 0 || day === 6) {
    return "weekend";
  }
}
