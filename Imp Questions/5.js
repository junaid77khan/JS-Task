// Define the function with only birth year as input
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;
  console.log(`You are either ${age2} or ${age1}`);
}

// Call the function with different birth years
calculateAge(1990);
calculateAge(2005);
calculateAge(1987);