function isRegExp (value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
} 

console.log(isRegExp(/abc/));             // true
console.log(isRegExp(new RegExp('abc'))); // true
console.log(isRegExp("abc"));             // false
