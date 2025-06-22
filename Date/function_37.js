function getTimezoneName(date) {
  const str = date.toString();
  const insideBrackets = str.split('(')[1];
  return insideBrackets.split(')')[0];
}
