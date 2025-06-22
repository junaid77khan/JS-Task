function isChar1(value) {
    return typeof value === 'string' && value.length === 1;
}

function isChar2(value) {
    // this will not work
    return Object.prototype.toString.call(value) === '[object String]'
}

console.log(isChar1('Jo'));
console.log(isChar1('J'));


console.log(isChar2('Jo'));
console.log(isChar2('J'));