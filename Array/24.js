let array =  [NaN, 0, 15, false, -22, '',undefined, 47, null];

if(array instanceof Array === false) {
    throw new Error('Invalid Input');
}

array = array.filter(ele => !isNaN(ele) && ele != 0 && ele != null);
console.log(array);