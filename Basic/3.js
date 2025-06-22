const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth()).padStart(2, '0');
const yyyy = today.getFullYear();

console.log(`${mm}-${dd}-${yyyy}`)