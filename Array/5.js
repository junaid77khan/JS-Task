let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.reduce((acc, cur, index) => acc+cur+(index === myColor.length-1  ? '' : ','), ''));