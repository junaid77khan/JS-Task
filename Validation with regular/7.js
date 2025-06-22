function isValidIP(ip) {
  const regex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
  return regex.test(ip);
}


console.log(isValidIP("192.168.0.1"));    
console.log(isValidIP("255.255.255.255")); 
console.log(isValidIP("10.0.300.1"));      
console.log(isValidIP("abc.def.ghi.jkl")); 
console.log(isValidIP("192.168.0"));       
console.log(isValidIP(""));                
