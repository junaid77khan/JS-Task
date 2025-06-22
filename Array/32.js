function includesEle(arr1, ele) {
    return arr1.includes(ele);
}

let arr1 = prompt('Enter array 1 - ');
arr1 = arr1.split(",");

let ele = prompt('Enter element - ');

console.log(includesEle(arr1, ele));