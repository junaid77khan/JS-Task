function countVowels(str) {
    const vowels = "aeiouAEIOUyY";
    let count = 0;
  
    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }