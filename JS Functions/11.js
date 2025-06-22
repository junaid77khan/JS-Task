function findSecondLowestAndGreatest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return "Array must contain at least two numbers.";
    }
  
    const uniqueArr = [...new Set(arr)];
  
    if (uniqueArr.length < 2) {
      return "Not enough unique numbers.";
    }
  
    uniqueArr.sort((a, b) => a - b);
  
    const secondLowest = uniqueArr[1];
    const secondGreatest = uniqueArr[uniqueArr.length - 2];
  
    return [secondLowest, secondGreatest];
  }
