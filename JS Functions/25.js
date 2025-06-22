function getLongestCountryName(countries) {
    if (!Array.isArray(countries) || countries.length === 0) {
      return null; 2
    }
  
    let longest = countries[0];
  
    for (let i = 1; i < countries.length; i++) {
      if (countries[i].length > longest.length) {
        longest = countries[i];
      }
    }
  
    return longest;
  }