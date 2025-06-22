
function greetUser(callback) {
  console.log("Welcome!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetUser(sayGoodbye);
