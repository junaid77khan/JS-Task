function add_minutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
