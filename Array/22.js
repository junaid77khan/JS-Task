let array1 = prompt('Enter array1 - ');
array1 = array1.split(',');

if(!Array.isArray(array1)) {
    throw new Error('Invalid Input');
}

let array2 = prompt('Enter array2 - ');
array2 = array2.split(',');

if(!Array.isArray(array2)) {
    throw new Error('Invalid Input');
}

let union = new Set();
array1.forEach(ele => {
    union.add(ele);
})

array2.forEach(ele => {
    union.add(ele);
})

console.log(union);