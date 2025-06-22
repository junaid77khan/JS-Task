function minutes_with_leading_zeros(date) {
  return date.getMinutes().toString().padStart(2, '0');
}
