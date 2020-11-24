// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// -----------------------------------------------------------------
var longestCommonPrefix = function(strs) {
    let commonStr = '';
    let str = '';
    if(strs.length === 0 )return commonStr;
    if(strs.length === 1){
        commonStr+=strs[0];
        return commonStr;
    }
   for(let j =0; j<=strs[0].length;j++){
       for(let i =0;i<strs.length-1;i++){
        str = strs[i].charAt(j);
        // console.log(str);
        if(strs[i].charAt(j)!==strs[i+1].charAt(j)) return commonStr;
    }
    commonStr+=str;
   }
   return commonStr;
};