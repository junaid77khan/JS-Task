let numbers =  [10,20,10,40,50,60,70];
let target = 50;

console.log(twoSumAllPairs(numbers, target));

function twoSumAllPairs(numbers, target) {
    let numToIdxMap = new Map();
    let pairs = new Set();
    const result = [];
    
    for(let i = 0; i < numbers.length; i++) {
        let comp = target - numbers[i];
        if(numToIdxMap.has(comp)) {
            for(const compIdx of numToIdxMap.get(comp)) {
                if(compIdx != i) {
                    const key = [Math.min(compIdx, i), Math.max(compIdx, i)].join(',');
                    if(!pairs.has(key)) {
                        result.push({'idx1': compIdx, 'idx2': i});
                        pairs.add(key);
                    }
                }
            }
        }
        
        if(!numToIdxMap.has(numbers[i])) {
            numToIdxMap.set(numbers[i], []);
        }
        numToIdxMap.get(numbers[i]).push(i);
    }
    
    return result;
}