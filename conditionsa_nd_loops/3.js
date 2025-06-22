let a = prompt('Enter first number - ');
let b = prompt('Enter second number - ');
let c = prompt('Enter third number - ');
alert(sort(a, b, c));

function sort(a, b, c) {
    let arr = [];
    if(a <= b && a <= c) {
        arr.push(a);
        if(b <= c) {
            arr.push(b);
            arr.push(c);
        } else {
            arr.push(c);
            arr.push(b);
        }
    } else if(b <= a && b <= c) {
        arr.push(b);
        if(a <= c) {
            arr.push(a);
            arr.push(c);
        } else {
            arr.push(c);
            arr.push(a);
        }
    } else {
        arr.push(c);
        if(a <= b) {
            arr.push(a);
            arr.push(b);
        } else {
            arr.push(b);
            arr.push(a);
        }
    }
    return arr;
}