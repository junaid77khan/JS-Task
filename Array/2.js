const input = prompt('Enter an array - ');
// It will definetly convert into an array.
const array = input.split(',').map(ele => ele.trim());

if(array.length > 0) {
    const cloned_array = [...array];
    array[0] = '&';
    console.log(array);
    console.log(cloned_array);
}