// Given an integer n, return any array containing n unique integers such that they add up to 0.
// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:
// Input: n = 3
// Output: [-1,0,1]

// Example 3:
// Input: n = 1
// Output: [0]

// --------------------------------------------------------------------

var sumZero = function(n) {
    let arr = [];
   if(n === 1){
       arr.push(0);
       return arr;
   }
    let x = n/2;
    if(n%2 === 0){
        let i =0;
        while(i<n){
            arr[i] = x;
            arr[i+1] = -x;
            i+=2;
            x--;
        }
    }
    else{
        arr[0] = 0;
        let i =1;
        while(i<n){
            arr[i] = x;
            arr[i+1] = -x;
            i+=2;
            x--;
        }
    }
    return arr;
};
