function countLetterOccurrences(str) {
    const letterMap = new Map();
  
    for (let char of str.toLowerCase()) {
      if (char >= 'a' && char <= 'z') {
        if (letterMap.has(char)) {
          letterMap.set(char, letterMap.get(char) + 1);
        } else {
          letterMap.set(char, 1);
        }
      }
    }
  
    return letterMap;
  }