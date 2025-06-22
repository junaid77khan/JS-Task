function returnLexicographicOrder(str) {
  return str.split('').sort().join('');
}
console.log(returnLexicographicOrder("hello")); 