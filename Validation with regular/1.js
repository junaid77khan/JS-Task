let str = 'John';
console.log(helper(str));

function helper(str) {
    if(typeof str !== 'string' || str.length <= 0) {
        throw new TypeError('Invalid input');
    }
    
    return str[0] === str[0].toUpperCase();
}