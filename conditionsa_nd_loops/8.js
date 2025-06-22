function isHappy(i, seen = new Set()) {
    if (i === 1) return true;
    if (seen.has(i)) return false;
    seen.add(i);
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let rem = temp % 10;
        sum += rem * rem;
        temp = Math.floor(temp / 10);
    }
    return isHappy(sum, seen);
}

function findFirstNHappyNumbers(n, limit) {
    const result = [];
    for (let i = 1; i <= limit; i++) {
        if (isHappy(i)) result.push(i);
        if (result.length === n) break;
    }
    return result;
}

const happyNumbers = findFirstNHappyNumbers(5, 1000);
console.log(happyNumbers);