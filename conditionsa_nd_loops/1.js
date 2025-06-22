let a = prompt('Enter first number - ');
let b = prompt('Enter second number - ');

console.log(helper(a, b));

function helper(a, b) {
    a = Number(a);
    b = Number(b);
    
    if(isNaN(a) || isNaN(b)) {
        return 'Invalid Input';
    } else {
        return Math.max(a, b);
    }
}