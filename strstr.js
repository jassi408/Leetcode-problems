// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0
// -----------------------------------------------------------------

var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    let obj = {};
    for(let i = 0; i < haystack.length; i++){
        let str = haystack[i];
        obj[str] ? obj[str]++ : obj[str] = 1;
    }
    // console.log(obj);
    for(let i = 0; i < needle.length ;i++){
        let key = needle[i];
        if(!(obj[key])){
            return -1;
        }
        else{
            obj[key]--;
        }
        return haystack.indexOf(needle);
    }
};