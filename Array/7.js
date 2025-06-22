let arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 

// bubble sort
bubble_sort(arr1);

function bubble_sort(arr1) {
    let n = arr1.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = i+1; j < n; j++) {
            if(arr1[i] > arr1[j]) {
                swap(arr1, i, j);
            }
        }
    }
    console.log(arr1);
}

function swap(arr1, i, j) {
    // console.log(`Swapping ${arr1[i]} and ${arr1[j]}`)
    let temp = arr1[i];
    arr1[i] = arr1[j];
    arr1[j] = temp;
}