let a = prompt('Enter first number - ');
let b = prompt('Enter second number - ');
let c = prompt('Enter third number - ');
alert(check_sign(a, b, c));

function check_sign(a, b, c) {
    let sign = 'Zero';
    let prod = a * b * c;
    if(prod < 0) {
        sign = '-';
    } else if(prod > 0) {
        sign = '+';
    }
    
    return sign;
}