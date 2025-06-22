const today = new Date();
let year = today.getFullYear();
let christmas = new Date(year, 11, 25); 

if (today > christmas) {
  christmas = new Date(year + 1, 11, 25);
}
const diffInMs = christmas - today;

const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

console.log(`There are ${diffInDays} day(s) left until next Christmas.`);
