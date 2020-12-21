// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True

// Example 2:
// Input: "PPALLL"
// Output: False

// ------------------------------------------------------------------------

var checkRecord = function(s) {
    let obj = {};
    for(let i = 0;i<s.length;i++){
        obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
    }
    
    if(obj['A'] > 1) return false;
    for(let i =0;i<s.length;i++){
       if((obj['L'] > 2)  && (s[i]==='L') && (s[i] === s[i+1]) && (s[i+1]===s[i+2])){
           return false;
       } 
    }
    return true;
   
};