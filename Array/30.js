function merge(arr1, arr2) {
    arr2.forEach(ele => {
        if(!arr1.includes(ele)) arr1.push(ele);
    })
    return arr1;
}

let arr1 = prompt('Enter array 1 - ');
arr1 = arr1.split(",");

let arr2 = prompt('Enter array 2 - ');
arr2 = arr2.split(",");

console.log(merge(arr1, arr2));