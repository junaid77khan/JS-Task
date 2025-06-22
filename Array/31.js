function removeEle(arr1, ele) {
    return arr1.filter(num => num !== ele)
}

let arr1 = prompt('Enter array 1 - ');
arr1 = arr1.split(",");

let ele = prompt('Enter element - ');

console.log(removeEle(arr1, ele));