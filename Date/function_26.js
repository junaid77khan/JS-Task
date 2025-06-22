function numeric_month(date) {
  return (date.getMonth() + 1).toString().padStart(2, '0');
}
