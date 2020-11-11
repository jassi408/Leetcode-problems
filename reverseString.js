// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
    let start = 0;
    let end = s.length-1;
    while(start<end){
        let v = s[start];
        s[start] = s[end];
        s[end] = v;
        start++;
        end--;  
    }
       return s; 
    }
// reverseString(["h","e","l","l","o"])