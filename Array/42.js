let arr1 = [1, 2, 3];
arr1 = flattenArray(arr1);

let arr2 =  [100, 2, 1, 10];
arr2 = flattenArray(arr2);

console.log(helper(arr1, arr2));

function helper(arr1, arr2) {
    let res = [];
    
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError('Invalid array');
    }

    for(let i = 0; i < arr1.length; i++) {
        if(!res.includes(arr1[i])) res.push(arr1[i]);
    }
    
    for(let i = 0; i < arr2.length; i++) {
        if(!res.includes(arr2[i])) res.push(arr2[i]);
    }
    
    return res;
}



function flattenArray(array, shallow = false) {
    let result = [];

    array.forEach(ele => {
        if (Array.isArray(ele)) {
            if (shallow) {
                for (let i = 0; i < ele.length; i++) {
                    result.push(ele[i]);
                }
            } else {
                let inner = flattenArray(ele);
                for (let i = 0; i < inner.length; i++) {
                    result.push(inner[i]);
                }
            }
        } else {
            result.push(ele);
        }
    });

    return result;
}