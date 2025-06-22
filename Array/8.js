let str = prompt('Enter a string - ');
let chars = [];

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    
    if (/[a-zA-Z]/.test(ch)) {
        chars.push(
            ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
        );
    } else {
        throw new Error(`Not a Character at idx ${i}`);
    }
}

console.log(chars.join(''));