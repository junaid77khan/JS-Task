function identityMatrix(n) {
    let result = [];
  
    for (let i = 0; i < n; i++) {
      let row = Array(n).fill(0); 
      row[i] = 1;                
      result.push(row);
    }
  
    return result;
  }
