function is_date(input) {
  return Object.prototype.toString.call(input) === "[object Date]";
}
