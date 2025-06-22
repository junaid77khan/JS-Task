function get_am_pm(date) {
  return date.getHours() >= 12 ? "pm" : "am";
}
