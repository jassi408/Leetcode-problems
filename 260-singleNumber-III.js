// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

// ----------------------------------------------------------------

var singleNumber = function(nums) {
    let obj = {};
    let result = [];
    for(let i = 0;i<nums.length;i++){
        let num = nums[i];
        obj[num] ? obj[num]++ : obj[num] = 1;
    }
    for(let i = 0; i<nums.length;i++){
        let num = nums[i];
        if(obj[num] === 1){
            result.push(num);
        }
       
    }
     return result;
};