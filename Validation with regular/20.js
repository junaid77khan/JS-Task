function isAlphaDashUnderscore(str) {
  return /^[a-zA-Z_-]+$/.test(str);
}
isAlphaDashUnderscore("hello_world"); 
isAlphaDashUnderscore("name-123");    
