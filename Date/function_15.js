function quarter_of_the_year(date) {
  const month = date.getMonth();
  return Math.floor(month / 3) + 1;
}
