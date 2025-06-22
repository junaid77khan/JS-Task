let arr =  [0,1];
console.log(merge_sort(arr, 0, 1));


function merge_sort(cur_arr, start, end) {
    if(start >= end) {
        return cur_arr;
    }
    
    let mid = start + (end - start)/2;
    let arr1 = merge_sort(cur_arr, start, mid);
    let arr2 = merge_sort(cur_arr, mid+1, end);
    
    return merge_arr(arr1, arr2, start, mid, mid+1, end);
}

function merge_arr(arr1, arr2, st1, e1, st2, e2) {
    let final_arr = [];
    let i = st1;
    let j = st2;
    let n = e1+1;
    let m = e2+1;
    while(i < n && j < m) {
        if(arr1[i] < arr2[j]) {
            final_arr.push(arr1[i++]);
        } else {
            final_arr.push(arr2[j++]);
        }
    }
    while(i < n) {
        final_arr.push(arr1[i++]);
    }
    
    while(j < m) {
        final_arr.push(arr2[j++]);
    }
    return final_arr;
}