function isNotANumber(value) {
    return typeof value === 'number' && isNaN(value);
}

console.log(Number.isNaN('John'))

console.log(isNotANumber('John'))
console.log(isNotANumber(1))
console.log(isNotANumber(true))