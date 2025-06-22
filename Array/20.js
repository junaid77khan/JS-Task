let array1 = prompt('Enter array1 - ');
array1 = array1.split(',');

if(!Array.isArray(array1)) {
    throw new Error('Invalid Input');
}

let dup_ele = new Set();
let set = new Set();

array1.forEach(ele => {
    if(set.has(ele) && !dup_ele.has(ele)) {
        dup_ele.add(ele);
    } else if(!set.has(ele)) {
        set.add(ele);
    }
})

console.log(dup_ele);