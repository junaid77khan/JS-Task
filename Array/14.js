let array = [1,2,3,4,4,5,5];

let distinct_array = [];

array.forEach(ele => {
    if(!distinct_array.includes(ele)) {
        distinct_array.push(ele);
    }
})

console.log(distinct_array)