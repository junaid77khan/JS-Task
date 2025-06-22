function longestPalindrome(str) {
    let longest = "";

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.slice(left + 1, right);
    }

    for (let i = 0; i < str.length; i++) {
        let oddPalindrome = expandAroundCenter(i, i);
        let evenPalindrome = expandAroundCenter(i, i + 1);
        let currentLongest = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;

        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }

    return longest;
}
