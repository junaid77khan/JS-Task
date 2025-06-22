let start = prompt('Enter start year - ');
start = Number(start);

if(isNaN(start)) {
    throw new Error('Invalid Input');
}

let end = prompt('Enter end year - ');
end = Number(end);

if(isNaN(end)) {
    throw new Error('Invalid Input');
}

if(start > end) {
    throw new Error('Starting year should be less than equal to ending year.');
}

for(let i = start; i <= end; i++) {
    if((i%4 === 0 && i%100 != 0) || i%400 == 0) {
        console.log(`${i} is a leap year`);
    } else {
        console.log(`${i} is not a leap year`);
    }
}