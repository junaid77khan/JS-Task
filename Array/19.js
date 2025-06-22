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

let i = 0;
let j = 0;
let n = array1.length;
let m = array2.length;

let final_arr = [];

while(i < n && j < m) {
    if(isNaN(array1[i]) || isNaN(array2[j])) {
        throw new Error('Invalid Input');
    }
    final_arr.push(Number(array1[i++]) + Number(array2[j++]));
}

while(i < n) {
    if(isNaN(array1[i])) {
        throw new Error('Invalid Input');
    }
    final_arr.push(Number(array1[i++]));
}

while(j < m) {
    if(isNaN(array2[j])) {
        throw new Error('Invalid Input');
    }
    final_arr.push(Number(array2[j++]));
}

console.log(final_arr);