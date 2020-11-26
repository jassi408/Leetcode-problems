// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: [2, 2, 3, 1]
// Output: 1

// -----------------------------------------------------------------

var thirdMax = function(nums) {
    let max = nums[0];
    let secondMax = -Infinity;
    let thirdMax = -Infinity;
    for(let i =0 ; i<nums.length;i++){
        let num = nums[i];
        if(num>max){
            thirdMax = secondMax;
            secondMax = max;
            max = num;
        }
        else if((num<max) && (num>secondMax)){
            thirdMax = secondMax;
            secondMax = num;
        }
        else if((num>thirdMax) && (num<secondMax)){
            thirdMax = num;
        }
    }
return thirdMax === -Infinity ? max : thirdMax;
    
};
