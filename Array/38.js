let arr = [10, 20, 30, 40, 50];
let idx1 = 1;
let idx2 = 3;

console.log(moveEle(arr, idx1, idx2));

function moveEle(arr, idx1, idx2) {
    if(!Array.isArray(arr)) {
        throw new TypeError('Invalid Array');
    }
    
    let length = arr.length;
    idx1 = ((idx1 % length) + length) % length;
    idx2 = ((idx2 % length) + length) % length;
    
    if(idx1 === idx2) return [...arr];
    
    let newArr = [...arr];
    let [ele] = newArr.splice(idx1, 1);
    newArr.splice(idx2, 0, ele);
    return newArr;
}