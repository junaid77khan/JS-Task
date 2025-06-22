function seconds_with_leading_zeros(date) {
  return date.getSeconds().toString().padStart(2, '0');
}
