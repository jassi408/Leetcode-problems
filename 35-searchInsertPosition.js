// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let middle = Math.floor((left + right)/2);
    while((left <= right) && (target !== nums[middle])){
        if(nums[middle] < target) left = middle + 1;
        else right = middle -1;
        middle = Math.floor((left + right)/2);

    }
    return nums[middle] === target ? middle : middle + 1;
};