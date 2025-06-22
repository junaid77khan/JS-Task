// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit() {
  const celsius = 30; // You can change this value
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius() {
  const fahrenheit = 86; // You can change this value
  const celsius = (fahrenheit - 32) * 5/9;
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}

// Call the functions
celsiusToFahrenheit();
fahrenheitToCelsius();