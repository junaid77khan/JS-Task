let ccNum = prompt('Enter credit card number - ');

console.log(validateCreditCard(ccNum));

function validateCreditCard(ccNum) {
    // First we can remove all spaces and dashes.
    ccNum = String(ccNum).replace(/\D/g, '');
    
    // Taking range of number of digits from 13 to 19.
    if(!/^\d{13,19}$/.test(ccNum)) {
        return 'Invalid';
    }
    
    let sum = 0;
    let flag = false;
    
    // should start from right to left and double every second digit and minus 9 if greater than 9.
    
    for(let i = ccNum.length-1; i >= 0; i--) {
        let digit = parseInt(ccNum[i]);
        
        if(flag) {
            digit *= 2;
            if(digit > 9) digit -= 9;
        }
        
        sum += digit;
        flag = !(flag);
    }
    
    return sum % 10 === 0 ? 'Valid' : 'Invalid';
}