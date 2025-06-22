let length = prompt('Enter length of an array - ');
length = Number(length);
if(isNaN(length)) {
    throw new TypeError('Invalid length');
}

let start = prompt('Enter starting element - ');
start = Number(start);
if(isNaN(start)) {
    throw new TypeError('Invalid start');
}

console.log(helper(length, start));

function helper(length, start) {
    let arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(start++);
    }
    return arr;
}