// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Note:Each element in the result should appear as many times as it shows in both arrays. The result can be in any order.

// -----------------------------------------------------------------------

var intersect = function(nums1, nums2) {
    let result = [];
   let obj1 = {};
   for(let i =0; i< nums1.length;i++){
       obj1[nums1[i]] ? obj1[nums1[i]]++ : obj1[nums1[i]] = 1;
   }
   for(let i =0; i<nums2.length;i++){
       let num = nums2[i];
       if(obj1[num] > 0){
           result.push(num);
           obj1[num]--;
       }
       
   }
   return result;
};