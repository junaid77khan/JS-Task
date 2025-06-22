function cleanArr(arr1) {
    // method 1
    // arr1.length = 0;
    
    // if we assign a new empty array to a then it is not valid as a now pointing to the new empty array, a is just referencing a particular array so we have to do it in place.
    
    // method 2 
    arr1.splice(0, arr1.length);
    return arr1;
}

let arr1 = prompt('Enter array 1 - ');
arr1 = arr1.split(",");

console.log(cleanArr(arr1));