function getSubsets(arr, subsetLength) {
    let result = [];
    
    function generateSubset(start, subset) {
        if (subset.length === subsetLength) {
            result.push(subset);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            generateSubset(i + 1, [...subset, arr[i]]);
        }
    }

    generateSubset(0, []);
    return result;
}

const array = [1, 2, 3];
const subsetLength = 2;
console.log(getSubsets(array, subsetLength));
