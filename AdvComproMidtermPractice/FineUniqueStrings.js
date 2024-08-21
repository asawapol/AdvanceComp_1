function findUniqueSubstrings(str1 , str2 , length) {
    if(str1.length !== str2.length) {
        return [];
    }
    const unique_substring = [];
    const string_set = new Set();

    for (let i = 0; i <= str1.length - length; i++){
        for (let j = 0; j <= str2.length -length; j++){
            const substring1 = str1.substring(i, i+ length);
            const substring2 = str2.substring(j, j+ length);

            if (substring1 !== substring2 && !string_set.has(substring1) && !string_set.has(substring2)){
                unique_substring.push(substring1, substring2);
                string_set.add(substring1);
                string_set.add(substring2);
            
            }
        }
    }
    return unique_substring;
}
 
    
console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3));
console.log(findUniqueSubstrings("hellohello", "helloworld", 2));
console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));

