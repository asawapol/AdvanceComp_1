function lenthOfLongestSubstring(s) {
    if (s === "") {
        return {maxLen: 0, longestSubstring: ""};
    }
    let maxLen = 0;
    let start = 0;
    let longestSubstring = "";
    let set = new Set();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        while (set.has(char)) {
            set.delete(s[start]);
            start++; 
        }
        set.add(char);
        const turelength = end - start +1;
        if (turelength > maxLen){
            maxLen = turelength;
            longestSubstring = s.substring(start, end +1);
        }
    }
    return {maxLen: maxLen, longestSubstring: longestSubstring};
}


console.log(lenthOfLongestSubstring("abcabcbb"))
console.log(lenthOfLongestSubstring("bbbbb"))
console.log(lenthOfLongestSubstring("pwwkew"))
console.log(lenthOfLongestSubstring(""))

