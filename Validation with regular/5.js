function trimStr(str) {
    const regex = /^\s+|\s+$/g;
    return str.replace(regex, '');
}

console.log(trimStr('  John the Don   '))