// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// ----------------------------------------------------------------------

var reverseStr = function(str, k) {
    let i =0;
    while(i<str.length){
       let s = reverseString(str.slice(i,i+k));
        str = str.slice(0,i) + s + str.slice(i+k,str.length);
        i = i+k+k;
    }
    return str;
};

var reverseString = function(s) {
    s = s.split('')
    let start = 0;
    let end = s.length-1;
    while(start<end){
        let v = s[start];
        s[start] = s[end];
        s[end] = v;
        start++;
        end--;  
    }
       return s.join(''); 
    }