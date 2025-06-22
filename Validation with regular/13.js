function isValidUKPostCode(str) {
    const regex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/g;

    return regex.test(str);
}

console.log(isValidUKPostCode("EC1A 1BB"));   
console.log(isValidUKPostCode("W1A 0AX"));    
console.log(isValidUKPostCode("M1 1AE"));     
console.log(isValidUKPostCode("INVALID"));    
