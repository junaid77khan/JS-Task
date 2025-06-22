const input = prompt('Enter an array - ');
// It will definetly convert into an array.
const array = input.split(',').map(ele => ele.trim());

// But here we can hard coded array and non-array value.
const array2 = [1,2,3];
const name = 'John the don';
console.log(Array.isArray(array));
console.log(Array.isArray(array2));
console.log(Array.isArray(name));
console.log(array);