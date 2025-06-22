function findLongestWord(str) {
    const words = str.split(" ");
    let longest = "";
  
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
  
    return longest;
  }
