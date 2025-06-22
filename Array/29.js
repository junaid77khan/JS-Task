function helper(start, end, step) {
    step = Number(step);
    if(typeof start != typeof end ||  isNaN(step)) {
        throw new Error('Invalid input');
    }
    
    let result = [];
    
    if(typeof start === 'string') {
        for(let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step){
            result.push(String.fromCharCode(i));
        }
    } else if(typeof start === 'number') {
        for(let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    
    console.log(result);   
}

helper(1, 10, 2);