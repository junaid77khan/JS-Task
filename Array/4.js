const input1 = prompt('Enter an array - ');
// It will definetly convert into an array.
const array = input1.split(',').map(ele => ele.trim());

last(array);

let input2 = prompt('Enter value of n - ');

input2 = Number(input2);

if(isNaN(input2)) {
    error_handling();
}

last(array, input2);

function last(array, n) {
    if(n === undefined) {
        if(array.length < 1) {
           error_handling();
        } else {
            console.log(array[array.length-1]);    
        }
    } else {
        if(n <= 0 || array.length < n) {
            error_handling();
        } else {
            for(let i = array.length-1; i >= array.length-n; i--) {
                console.log(array[i]);
            }
        }
    }
}

function error_handling() {
    console.log('Invalid');
}