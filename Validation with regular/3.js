let emailRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
let email = 'tes..t@gmail.com';

console.log(validateEmail(email));
console.log(emailRegex.test(email));

function validateEmail(email) {
    let [name, domain] = email.split('@');
    
    if(name === '' || domain === '' || domain.indexOf('.') === -1) {
        return 'Invalid';
    }
    
    if(name.startsWith('.') || name.endsWith('.') || name.indexOf('..') !== -1) {
        return 'Invalid';
    }
    
    return 'Valid';
}