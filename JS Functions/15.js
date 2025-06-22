function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  const b = parseFloat(prompt("Enter the base (b):"));
  const n = parseFloat(prompt("Enter the exponent (n):"));
  
  if (isNaN(b) || isNaN(n)) {
    alert("Please enter valid numbers.");
  } else {
    const result = power(b, n);
    const message = `${b} raised to the power of ${n} is ${result}`;
  
    console.log(message);
    alert(message);
  }
