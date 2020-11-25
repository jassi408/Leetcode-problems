// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.
// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

// ----------------------------------------------------------------

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'');
    s = s.toLowerCase();
    let i =0;
    let j = s.length-1;
    if(s.length <=1)return true;
    if(s[i] === s[j]){
        return isPalindrome(s.slice(1,-1));
    }
    else{
        return false;
    }

};