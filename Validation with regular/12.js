function USZipCode(str) {
    // 12345

    // 12345-6789
    const regex = /^\d{5}(-\d{4})?$/g;

    return regex.test(str);
}

console.log(USZipCode("12345"));        
console.log(USZipCode("12345-6789"));   
console.log(USZipCode("1234"));         
console.log(USZipCode("123456"));       


