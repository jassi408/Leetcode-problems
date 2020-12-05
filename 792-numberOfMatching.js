// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".

// ----------------------------------------------------------------------
// with recursion

var numMatchingSubseq = function(S, words) {
    let counter = 0;
    function helper(S,words){
        let i = 0;  //pointer for words
        let j = 0;  // pointer for S
        let word = words[0];
        if(words.length === 0) return counter;
        while(j<S.length){
            if(word[i] === S[j]){
                i++;
                j++;
             }
             else{
                  j++;
             }
            if((word[i-1] === S[j-1]) && (i === word.length)){
                 counter++;
             }
       }
    return helper(S,words.slice(1));
    }
    return helper(S,words);
};

// -----------------------------------------------------------------------


var numMatchingSubseq = function(S, words) {  
  let count = 0
  for(const w of words){
    let continuE = false
    let prvIdx= -1
    for(let i=0;i<w.length;i++){
      let idx = S.indexOf(w[i], prvIdx+1)
      if(idx > prvIdx){
        prvIdx = idx
      }else{
        continuE = true
        break
      }
    }
    if(continuE) continue
    count++
  }
  return count
};

// --------------------------------------------------------------------

// two pointer
var numMatchingSubseq = function (S, words) {
    let count = 0
    for (let w of words) {
      let i = 0, j = 0;
      while (j < w.length && i < S.length) {
        if (w[j] == S[i]) {
          j += 1
          i += 1
        }else {
          i += 1
        }
      }
      if (j == w.length) {
        count += 1
      }    
    }
    return count
  };