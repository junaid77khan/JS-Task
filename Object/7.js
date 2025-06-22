let str = 'Dog';

let result1 = [];
for(let i = 0; i < str.length; i++) {
    let cur_chars = [];
    for(let j = i; j < str.length; j++) {
        cur_chars.push(str[j]); 
        result1.push(cur_chars.join(''));
    }
}
console.log(result1);

let result2 = [];
for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j <= str.length; j++) {
        let subStr = str.slice(i, j);
        result2.push(subStr);
    }
}
console.log(result2);