// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// ------------------------------------------------------------------

var reverseWords = function(s) {
    let j =0;
    let i = 0;
    while(i<s.length){
        if(s[i] === ' '){
           let str =  reverseString(s.slice(j,i))
           s = s.slice(0,j) + str + s.slice(i,s.length)
            i++;
            j = i;
        }
        else if(i === s.length-1){
            let str =  reverseString(s.slice(j,i+1))
           s = s.slice(0,j) + str
            i++;
           
        }
        else{
            i++;
        }
    }
    return s;
};

var reverseString = function(s) {
    s = s.split('')
    let start = 0;
    let end = s.length-1;
    while(start<end){
        let v = s[start];
        s[start] = s[end];
        s[end] = v;
        start++;
        end--;  
    }
       return s.join(''); 
}