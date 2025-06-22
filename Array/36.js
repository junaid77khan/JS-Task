function helper(n, ele) {
    if(typeof n !== 'number') {
        throw new Error('Invalid input'); 
    }
    return new Array(n).fill(ele);
}

console.log(helper(5, 11));