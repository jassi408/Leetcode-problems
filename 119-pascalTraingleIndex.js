// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle. Notice that the row index starts from 0.

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

// ------------------------------------------------------------------

var getRow = function(rowIndex) {
    let triangle = [[1]];
if(rowIndex === 0) return triangle;
for(let i = 0; i<rowIndex;i++){
    let prevRow = triangle[i];
//     console.log(prevRow);
    let nextRow = [];
    nextRow.push(1);
    for(let j = 0;j<prevRow.length-1;j++){
        nextRow.push(prevRow[j]+prevRow[j+1]);
    }
    nextRow.push(1);
    triangle.push(nextRow);
}
return (triangle[rowIndex]);
};