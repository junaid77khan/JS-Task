// Function to calculate the circumference
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}

// Function to calculate the area
function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area is ${area}`);
}

// Call the functions with an example radius
calcCircumference(5);
calcArea(5);