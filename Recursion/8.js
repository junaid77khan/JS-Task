arr =  [0,1,2,3,4,5,6];
let target = prompt('Enter target - ');
let start = 0;
let end = arr.length;
while(start < end) {
    let mid = start + (end - start) / 2;
    if(arr[mid] === target) {
        console.log(mid);
        break;
    } else if(arr[mid] > target) {
        mid = end - 1;
    } else {
        mid = start + 1;
    }
}
if(start >= end) {
    console.log('Element not found');
}