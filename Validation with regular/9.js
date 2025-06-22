function isValidURL(str) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/g;
    return regex.test(str);
}

console.log(isValidURL("https://example.com"));         
console.log(isValidURL("http://www.google.co.in"));    
console.log(isValidURL("example.com"));                 
console.log(isValidURL("ftp://invalid.com"));           
console.log(isValidURL("http:/bad.url"));               
console.log(isValidURL("https://example.com/page 1"));  
