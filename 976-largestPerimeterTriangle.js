// Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths. If it is impossible to form any triangle of non-zero area, return 0.

// Example 1:
// Input: [2,1,2]
// Output: 5

// Example 2:
// Input: [1,2,1]
// Output: 0

// Example 3:
// Input: [3,2,3,4]
// Output: 10

// Example 4:
// Input: [3,6,2,3]
// Output: 8

// -----------------------------------------------------------------

var largestPerimeter = function(A) {
    A = A.slice().sort((a,b)=>a-b);
    let p = 0;
    let maxP = 0;
    for(let i = A.length-1;i>=0;i--){
        let a = A[i];
        let b = A[i-1];
        let c = A[i-2];
        if(((a+b)>c)&&((b+c)>a)&&((c+a)>b)){
            p = a+b+c;
            maxP = Math.max(p,maxP);
        }
    }
    return maxP;
};
 