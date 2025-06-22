let array1 = [1, 2, 3, 4, 5];
// array1 = array1.split(',');

if(!Array.isArray(array1)) {
    throw new Error('Invalid Input');
}

array1 = flattenArray(array1);

let array2 = [1, [2], [3, [[4]]],[5,6,7,8]];
// array2 = array2.split(',');

if(!Array.isArray(array2)) {
    throw new Error('Invalid Input');
}

array2 = flattenArray(array2);

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

helper(array1, array2);

function helper(array1, array2) {
    let diff1 = array1.filter(ele => !array2.includes(ele));
    let diff2 = array2.filter(ele => !array1.includes(ele));
    
    let final = [...diff1, ...diff2];
    console.log(final);
}