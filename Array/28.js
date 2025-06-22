let strings = ['go', 'google', 'goal'];

console.log(helper2(strings));

function helper(strings) {
    if (strings.length === 0) return '';
    let commonPrefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
        commonPrefix = find(commonPrefix, strings[i]);
        if (commonPrefix === '') break; 
    }
    return commonPrefix;
}

function find(commonPrefix, string) {
    let i = 0;
    let n = commonPrefix.length;
    let m = string.length;

    while (i < Math.min(n, m)) {
        if (commonPrefix[i] !== string[i]) {
            return string.slice(0, i);
        }
        i++;
    }

    return string.slice(0, i);
}

function helper2(strings) {
    if(strings.length === 0) return '';
    
    let commonPrefix = strings[0];
    for(let i = 1; i < strings.length; i++) {
        while(strings[i].indexOf(commonPrefix) !== 0) {
            commonPrefix = commonPrefix.slice(0, -1);
            if(commonPrefix.length === 0) return '';
        }
    }
    return commonPrefix;
}