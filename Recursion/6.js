let first = 0;
let second = 1;
let n = prompt('Enter n - ');
console.log(`${first} ${second}`);
for(let i = 0; i < n; i++) {
    let temp = first + second;
    console.log(`${temp}`);
    first = second;
    second = temp;
}