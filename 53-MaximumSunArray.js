// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// ---------------------------------------------------------------

var maxSubArray = function(arr) {
    let maxSum = arr[0];
    for(let j = 0;j<arr.length;j++){
        let tempSum = arr[j];
        maxSum = Math.max(tempSum,maxSum);

        for(let i =j+1; i<arr.length;i++){
            tempSum += arr[i];
            maxSum = Math.max(tempSum,maxSum);
}
}
    return maxSum;
};