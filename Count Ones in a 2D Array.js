/*
Create a function to count the number of 1s in a 2D array.

Examples
countOnes([
  [1, 0],
  [0, 0]
]) ➞ 1

countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]) ➞ 7

countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
]) ➞ 2
*/

function countOnes(matrix) {
    let i, b
    let count = 0

    for (i in matrix) {
        for(b in matrix[i]) {
            if(matrix[i][b] == 1) count++
        }
    }
    return count
}

console.log(
    countOnes([
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ]))