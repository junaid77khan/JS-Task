function isSame(val1, val2) {
    return typeof val1 === typeof val2;
}

console.log(isSame(1, 2));         // true
console.log(isSame('1', 1));       // false
console.log(isSame([], {}));       // true (both are objects)
console.log(isSame(null, {}));     // true (both are objects, but null is special case)
