// Given an array of integers nums, write a method that returns the "pivot" index of this array. We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index. If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.
// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
// Also, 3 is the first index where this occurs.

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// ------------------------------------------------------------------

var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let pivot = 0;
    while(pivot<nums.length){
        leftSum = nums.slice(0,pivot).reduce(((total,currentValue)=> total + currentValue),0);
        if(pivot === nums.length-1){
            rightSum  = 0;
        }
        else{
            rightSum = nums.slice(pivot+1).reduce(((total,currentValue)=> total + currentValue),0);
        }
        
        if(leftSum === rightSum){
            return pivot;
         }
        else{
            pivot++;
        }
    }
    return -1;
    
};

// ------------------------second mehod silding window----------------------

var pivotIndex = function(nums) {
    let leftSum = 0;
       let rightSum = 0;
       let pivot = 0;
       for(let i = 1 ; i<nums.length;i++){
           rightSum += nums[i];
       }
       while(pivot<nums.length){
           if(leftSum === rightSum){
               return pivot;
           }
           else{
               leftSum += nums[pivot];
               rightSum -= nums[pivot+1]
           }
           pivot++;
       }
       return -1;
   };