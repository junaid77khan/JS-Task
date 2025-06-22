function getUniqueCharacters(str) {
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    if (!unique.includes(str[i])) {
      unique += str[i];
    }
  }
  return unique;
}

const input = "thequickbrownfoxjumpsoverthelazydog";
console.log(getUniqueCharacters(input));