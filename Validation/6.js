function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}

console.log(isObject({}));
console.log(isObject([]));
console.log(isObject(1));
console.log(typeof null)