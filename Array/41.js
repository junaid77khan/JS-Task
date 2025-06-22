let from = prompt('Enter from element - ');
from = Number(from);
if(isNaN(from)) {
    throw new TypeError('Invalid from');
}

let to = prompt('Enter to element - ');
to = Number(to);
if(isNaN(to)) {
    throw new TypeError('Invalid to');
}

console.log(helper(from, to));

function helper(from, to) {
    if(typeof from !== 'number' || typeof to !== 'number') {
        throw new TypeError('Invalid input');
    }
    
    let range = [];
    
    let step = from >= to ? -1 : 1;
    
    for(let i = from; step >= 0 ? i <= to : i >= to; i += step) {
        // console.log(i);
        range.push(i);
    }
    
    return range;
}