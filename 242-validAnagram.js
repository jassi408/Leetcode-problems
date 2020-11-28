// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// -------------------------------------------------------------------

var isAnagram = function(s, t) {
    let obj1 = {};
    if(s.length !== t.length) return false;
    for(let i =0; i< s.length;i++){
        obj1[s[i]] ? obj1[s[i]]++ : obj1[s[i]] = 1;
    }
    
    for(let i =0; i<t.length;i++){
        let letter = t[i];
        if(!obj1[letter]) return false;
        else obj1[letter]--;
    }
    return true;
};