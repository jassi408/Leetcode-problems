// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
// Each letter in the magazine string can only be used once in your ransom note.
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// -----------------------------------------------------------------

var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length === 0) return true;
    let obj1 = {};
    let obj2 = {};

    for(let i = 0;i<ransomNote.length;i++){
       let key =  ransomNote.charAt(i);
       obj1[key] ? obj1[key]++ : obj1[key] = 1;
   }

   for(let i = 0;i<magazine.length;i++){
       let key =  magazine.charAt(i);
       obj2[key] ? obj2[key]++ : obj2[key] = 1;
   }
    
   for(let i = 0;i<ransomNote.length;i++){
       let key =  ransomNote.charAt(i);
       if(obj1[key] > obj2[key] || obj2[key] === undefined) return false;
       
  }
    return true;

};