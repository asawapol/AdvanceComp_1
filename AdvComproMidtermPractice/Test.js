// function lenthOfLongestSubstring(s) {
//     if (s === "") {
//         return {maxLen: 0, longestSubstring: ""};
//     }
//     let maxLen = 0;
//     let start = 0;
//     let longestSubstring = "";
//     let set = new Set();

//     for (let end = 0; end < s.length; end++) {
//         const char = s[end];

//         while (set.has(char)) {
//             set.delete(s[start]);
//             start++; 
//         }
//         set.add(char);

//         const turelength = end - start +1;
//         if (turelength > maxLen){
//             maxLen = turelength;
//             longestSubstring = s.substring(start, end +1);
//         }
//     }
//     return {maxLen: maxLen, longestSubstring: longestSubstring};
// }


// console.log(lenthOfLongestSubstring("abcabcbb"))
// console.log(lenthOfLongestSubstring("bbbbb"))
// console.log(lenthOfLongestSubstring("pwwkew"))
// console.log(lenthOfLongestSubstring(""))


function findUniqueSubstrings(str1, str2, length) {
    if (str1.length !== str2.length) {
      return []; 
    }
  
    const uniqueSubstrings = [];
    const substringSet = new Set();
  
    for (let i = 0; i <= str1.length - length; i++) {
      for (let j = 0; j <= str2.length - length; j++) {
        const substring1 = str1.substring(i, i + length);
        const substring2 = str2.substring(j, j + length);
  
        if (substring1 !== substring2 && !substringSet.has(substring1) && !substringSet.has(substring2)) {
          uniqueSubstrings.push(substring1, substring2);
          substringSet.add(substring1);
          substringSet.add(substring2);
        }
      }
    }
  
    return uniqueSubstrings;
  }
  console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3));
  console.log(findUniqueSubstrings("hellohello", "helloworld", 2));
  console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
  console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));

