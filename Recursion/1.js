function factorial(num) {
    num = Number(num);
    if(isNaN(num)) {
        throw new Error('Invalid input');
    }
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));