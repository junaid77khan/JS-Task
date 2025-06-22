function vowelCount(str) {
    const regex = /[aeiou]/gi;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

console.log(vowelCount("Hello World"));       // 3 (e, o, o)
console.log(vowelCount("JAVASCRIPT"));        // 3 (A, A, I)
console.log(vowelCount("Rhythm"));            // 0 (no vowels)
console.log(vowelCount(""));                  // 0
