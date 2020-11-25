// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// --------------------------------------------------------------------

var firstUniqChar = function(s) {
    if(s.length === 0) return -1;
    let obj1 = {};
    
    for(let i = 0;i<s.length;i++){
       let key =  s.charAt(i);
       obj1[key] ? obj1[key]++ : obj1[key] = 1;
   }
   
   for(let i =0 ; i<s.length ; i++){
     let key = s.charAt(i);
     if(obj1[key] === 1) return i;
       
   }
    return -1;
};
 