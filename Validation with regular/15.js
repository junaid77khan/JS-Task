function isValidSSN(value) {
  return /^\d{3}-\d{2}-\d{4}$/.test(value);
}

console.log(isValidSSN('123-22-1234'))