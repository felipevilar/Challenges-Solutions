
/*
An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

Examples
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.
Notes
N/A
*/

function isSpecialArray(arr) {
    const verifyIt = (a,b) => {
        if(a%2==0 && b%2==0) return true
        if(a%2!=0 && b%2!=0) return true
    }
    return arr.every(verifyIt)
}

console.log(isSpecialArray([0, 4, 4, 5, 6, 7, 6, 9]))