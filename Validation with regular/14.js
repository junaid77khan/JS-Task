function isValidCanadaPostCode(code) {
    return /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(code);
}

console.log(isValidCanadaPostCode("K1A 0B1"));  
console.log(isValidCanadaPostCode("B2Z1A5"));   
console.log(isValidCanadaPostCode("123 456"));  
console.log(isValidCanadaPostCode("A1 1A1"));   
