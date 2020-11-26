// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:
// Input:
// [4,3,2,7,8,2,3,1]
// Output:
// [5,6]

// ---------------------------------------------------------------

var findDisappearedNumbers = function(nums) {
    nums = nums.slice().sort((a,b) => a-b);
    let length = nums.length;
    
    let result = [];
    if(nums.length === 0) return result;
    if(nums[length-1] !== length) {
        result.push(length);
        nums.push(length);
    }
    let j =0;
    
    for(let i =1;i<=length;i++){
         if((nums[j] !== i)&&(nums[j]<i)){
            nums.splice(j,1);
            i--;
        }
        else if((nums[j]!==i) && (nums[j])>i){
            result.push(i);
        }
       
        else j++;
    }
    return result;
};