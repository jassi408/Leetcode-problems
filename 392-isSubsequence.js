// Given a string s and a string t, check if s is subsequence of t.
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// ----------------------------------------------------------------------

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(j<=t.length){
        if(i === s.length) return true;
        if(s[i] === t[j]){
            i++;
            j++;
        }
        else{
            j++;
            
        }
        
    }
    return false;
};