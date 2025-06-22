function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1 = parseInt(prompt("Enter first positive integer:"));
let num2 = parseInt(prompt("Enter second positive integer:"));

if (num1 > 0 && num2 > 0) {
    let gcd = findGCD(num1, num2);
    alert("GCD of " + num1 + " and " + num2 + " is: " + gcd);
} else {
    alert("Please enter two positive integers.");
}