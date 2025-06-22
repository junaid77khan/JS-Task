let num = prompt('Enter a number - ');

helper(num);

function helper(num) {
    if(typeof num!== 'string') {
        num = num.toString();
    }
    
    let final_str = num[0];
    
    for(let i = 0; i < num.length-1; i++) {
        let left = Number(num[i]);
        if(isNaN(left)) {
            error_handling();
            return;
        }
        let right = Number(num[i+1]);
        if(isNaN(right)) {
            error_handling();
            return;
        }
        if(left%2 === 0 && right%2 === 0) {
            final_str = final_str + '-' + right;
        } else {
            final_str = final_str + right;
        }
    }
    console.log(final_str);
}

function error_handling() {
    console.log('Invalid');
}