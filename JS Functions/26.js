function longestsub(s){
    let longest = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while(right < s.length){
        let letter = s[right];

        if(!set.has(letter)){
            set.add(letter);
            longest = Math.max(longest , set.size);
            right++;
        } else{
            set.delete(s[left]);
            left++;
        }
    }
    return longest;
}
