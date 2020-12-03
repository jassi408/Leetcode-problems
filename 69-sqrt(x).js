// Given a non-negative integer x, compute and return the square root of x.Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Example 1:
// Input: x = 4
// Output: 2

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// ----------------------------------------------------------

var mySqrt = function(x) {
    if(x === 0) return 0;
    if(x === 1) return 1;
    let start = 0;
    let end = x;
    let mid = Math.floor((start+end)/2);
    let y = mid * mid;
    while(start<end){
        if(x === y) return mid;
        if(y > x) {
            end = mid--;
            mid = Math.floor((start+end)/2);
            y = mid*mid;
        }
        else{
            start = mid + 1;
            mid = Math.floor((start+end)/2);
            y =mid *mid;
        }
            
        
    }
    if(start === end){
        mid = mid-1;
    }
    
    return mid;
};