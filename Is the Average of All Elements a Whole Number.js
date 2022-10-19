/*
Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false
Notes
N/A
*/

function isAvgWhole(arr) {
    let div = arr.length
    let sum = 0
    let avarage = 0
    
    for(let i in arr) sum += arr[i]
    
    avarage = sum%div

    if(avarage == 0) return true

    return false
}
console.log(
isAvgWhole([1, 3]),

isAvgWhole([1, 2, 3, 4]),

isAvgWhole([1, 5, 6]) ,

isAvgWhole([1, 1, 1]),

isAvgWhole([9, 2, 2, 5]),
)