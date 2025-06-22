let array = prompt('Enter array - ');
array = array.split(',');

if(!Array.isArray(array)) {
    throw new Error('Invalid Input');
}

for(let i = 1; i < array.length; i++) {
    let randomIdx = Math.floor(Math.random() * (i+1));
    swap(array, i, randomIdx);
}

console.log(array);

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}