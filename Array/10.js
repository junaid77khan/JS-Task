var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 
26, 7]]; 

let n = a.length;
for(let i = 0; i < n; i++) {
    let m = a[i].length;
    console.log(`Row ${i}`);
    for(let j = 0; j < m; j++) {
        console.log(a[i][j]);
    }
}