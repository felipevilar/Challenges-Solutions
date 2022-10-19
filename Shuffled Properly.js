/*
Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.

Examples
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
// 1, 2, 3 appear consecutively

isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
// 9, 8, 7, 6 appear consecutively

isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
// No consecutive numbers appear

isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
// No consecutive numbers appear
Notes
Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
You will get numbers from 1-10.
*/

function isShuffledWell(arr) {
    let count = 1

	for(let i=0;i<arr.length;i++) {
        if(arr[i] === arr[i+1]+1 || arr[i] === arr[i+1]-1) {
            count++
            if(count === 3) return false
        } else {
            count = 1
        }
    }
    return true;
}
console.log(
/* isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]),
isShuffledWell([1, 2, 8, 5, 6, 9, 10, 11, 7, 4]), */
isShuffledWell([2, 3, 2, 1, 8, 1, 4, 7, 3, 5])
)