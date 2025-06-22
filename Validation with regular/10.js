function alphaNumeric(str) {
    const regex = /^[a-zA-Z0-9]+$/g;
    return str.match(regex);
}

console.log(alphaNumeric('@'))