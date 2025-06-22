function hours_with_zeroes(date) {
  let hour = date.getHours() % 12;
  hour = hour === 0 ? 12 : hour;
  return hour.toString().padStart(2, '0');
}
