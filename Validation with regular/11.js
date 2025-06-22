function isValidTime(str) {
    // HH - 0 to 23
    // MM - 0 to 59
    // SS = 0 to 59
    const regex = /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/g;

    return regex.test(str);

}

console.log(isValidTime("13:45"));    
console.log(isValidTime("13:45:59"));  
console.log(isValidTime("13:60"));     
console.log(isValidTime("25:00"));     
