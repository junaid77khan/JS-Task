// Define the function
function calculateSupply(age, amountPerDay) {
  const maxAge = 90;
  const yearsLeft = maxAge - age;
  const totalNeeded = Math.round(yearsLeft * 365 * amountPerDay);
  console.log(`You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}`);
}

// Call the function with different values
calculateSupply(25, 2.5);
calculateSupply(40, 1.2);
calculateSupply(70, 0.5);