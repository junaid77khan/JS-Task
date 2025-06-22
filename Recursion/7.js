let num = prompt('Enter num - ');
let isEven = num%2 === 0 ? true : false;
if(isEven) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}