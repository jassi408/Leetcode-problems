// Given a positive integer num, write a function which returns True if num is a perfect square else False. Follow up: Do not use any built-in library function such as sqrt.
// Example 1:
// Input: num = 16
// Output: true

// Example 2:
// Input: num = 14
// Output: false

// -----------------------------------------------------------------------------------

var isPerfectSquare = function(num) {
    if(num === 0 || num === 1) return true;
    let start = 0;
    let end = num;
    let mid = Math.floor((start+end)/2);
    let y = mid*mid;
    while(start<=end){
        if(num === y) return true;
        if(y<num){
            start = mid+1;
            mid = Math.floor((start+end)/2);
            y = mid*mid;
        }
        else{
            end = mid-1;
            mid = Math.floor((start+end)/2);
            y = mid*mid;
        }
    }
    return false;
};