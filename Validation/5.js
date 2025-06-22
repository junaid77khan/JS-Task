function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

console.log(isNumber(1));
console.log(isNumber("John"));