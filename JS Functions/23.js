function firstNonRepeatedChar(str) {
    const charCount = new Map();
  
    for (let char of str) {
      if (charCount.has(char)) {
        const count = charCount.get(char);
        charCount.set(char, count + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  
    for (let char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null; 
  }
