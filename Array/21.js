let array = [1, [2], [3, [[4, [10, 34, 56]]]],[5,6]];

if (!(array instanceof Array)) {
    throw new Error('Invalid Input');
}

console.log('Deep flatten:', flattenArray(array));
console.log('Shallow flatten:', flattenArray(array, true));

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