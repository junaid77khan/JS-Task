const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

function displayColors(arr) {
    for (let i = 0; i < arr.length; i++) {
        let suffix = (i + 1) % 10 === 1 && (i + 1) !== 11 ? o[1] :
                     (i + 1) % 10 === 2 && (i + 1) !== 12 ? o[2] :
                     (i + 1) % 10 === 3 && (i + 1) !== 13 ? o[3] : o[0];
        console.log(`${i + 1}${suffix} choice is ${arr[i]}.`);
    }
}

displayColors(color);
