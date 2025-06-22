function day_of_the_month(date) {
  return date.getDate().toString().padStart(2, '0');
}
