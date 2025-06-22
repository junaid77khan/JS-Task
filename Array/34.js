function nthLargest(arr1, n) {
    if(!Array.isArray(arr1) || typeof n !== 'number') {
        throw new Error('Invalid input'); 
    }
    if(n > arr1.length) {
        throw new Error('Out of Bound');
    }
    
    let sorted = [...arr1].sort((a, b) => b-a);
    return sorted[n-1];
}

let arr1 = [ 43, 56, 23, 89, 88, 90, 99, 652];

console.log(nthLargest(arr1, 4));