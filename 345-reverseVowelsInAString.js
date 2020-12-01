// Write a function that takes a string as input and reverse only the vowels of a string.
// Example 1:
// Input: "hello"
// Output: "holle"

// Example 2:
// Input: "leetcode"
// Output: "leotcede"

// Note: The vowels does not include the letter "y".

// ---------------------------------------------------------------

var reverseVowels = function(s) {
    s = s.split('');
    let obj = {a:1,e:1,i:1,o:1,u:1,A:1,E:1,I:1,O:1,U:1};
    let i = 0;
    let j = s.length-1;
   
    while(i<j){
        while(i<j){
           if(!(obj[s[i]])) i++;
           else break;
        }
        while(j>i){
           if(!(obj[s[j]])) j--;
           else break;
        }
        let temp =s[j];
        s[j] = s[i];
        s[i] = temp;
        i++,j--;
    }
    
    return s.join('');
};
