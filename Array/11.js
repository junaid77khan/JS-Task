let input = prompt('Enter an array in string - ');
let array = input.split(",");

let sumOfSquares = 0;
array.forEach(ele => {
    ele = Number(ele);
    if(isNaN(ele)) {
        throw new Error('Element is not a number don.');
    }
    sumOfSquares += (ele*ele);
})

console.log(sumOfSquares);