function diff_to_GMT(date) {
  const offsetMinutes = date.getTimezoneOffset(); 
  const offsetHours = -offsetMinutes / 60; 
  return (offsetHours >= 0 ? "+" : "") + offsetHours.toFixed(3);
}
