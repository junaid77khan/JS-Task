function isJSONObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]' && val.constructor === Object;
}

console.log(isJSONObject({}));
console.log(isJSONObject(new Date()));
console.log(isJSONObject([]))
console.log(isJSONObject(null))
console.log(isJSONObject(Object.create(null)))


// val.constructor only present in proper JSON Object.