function getUniqueCharacters(str) {
    let unique = "";
  
    for (let char of str) {
      if (!unique.includes(char)) {
        unique += char;
      }
    }
  
    return unique;
  }
