function countWords(str) {
    let trimRegex = /^\s+|\s+$/g;;
    str = str.replace(trimRegex, '');

    let spaceRegex = /\s{2,}/g;
    str = str.replace(spaceRegex, ' ');

    let newLineRegex = /\n\s+/g;
    str = str.replace(newLineRegex, '\n');

    if(str === '') return 0;
    return str.split(' ').length;    
}

console.log(countWords("   Hello   world!  "));               // 2
console.log(countWords("\n   This   is   a test  "));          // 4
console.log(countWords("   \n  Multiple \n  lines here "));    // 3
console.log(countWords(""));                                   // 0
