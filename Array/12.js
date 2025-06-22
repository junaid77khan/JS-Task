let input = prompt('Enter an array in string - ');
let array = input.split(",");

let sum = 0;
let product = 1;

array.forEach(ele => {
    ele = Number(ele);
    if(isNaN(ele)) {
        throw new Error('Element is not a number don.');
    }
    sum += ele;
    product *= ele;
})

console.log(`Sum is - ${sum}`);
console.log(`Product is - ${product}`);