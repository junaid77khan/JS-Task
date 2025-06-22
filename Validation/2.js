function isError(value) {
    return value instanceof Error;
}

console.log(isError(new Error('Oops')));         // true
console.log(isError(new TypeError('Wrong type'))); // true
console.log(isError('Error'));                   // false
console.log(isError({ message: 'Not real error' })); // false