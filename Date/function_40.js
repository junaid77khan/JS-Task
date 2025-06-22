function timezone_offset_in_seconds(date) {
  return -date.getTimezoneOffset() * 60;
}
