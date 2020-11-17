// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// ------------------------------------------------------------------------

var generate = function(numRows) {
    if(numRows === 0) return [];
    let triangle = [[1]];
    for(let i = 0; i<numRows-1;i++){
        let prevRow = triangle[i];
        let nextRow = [];
        nextRow.push(1);
        for(let j = 0;j<prevRow.length-1;j++){
             nextRow.push(prevRow[j]+prevRow[j+1]);
        }
    nextRow.push(1);
    triangle.push(nextRow);
}

   return triangle; 
};