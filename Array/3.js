const input1 = prompt('Enter an array - ');
// It will definetly convert into an array.
const array = input1.split(',').map(ele => ele.trim());

helper1(array);

let input2 = prompt('Enter value of n - ');

input2 = Number(input2);

if(isNaN(input2)) {
    error_handling();
}

helper2(array, input2);

function helper1(array) {
    if(array.length < 1) {
       error_handling();
    } else {
        console.log(array[0]);    
    }
}

function helper2(array, n) {
    if(n <= 0 || array.length < n) {
        error_handling();
    } else {
        for(let i = 0; i < n; i++) {
            console.log(array[i]);
        }
    }
}

function error_handling() {
    console.log('Invalid');
}