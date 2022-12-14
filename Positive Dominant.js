/*
An array is positive dominant if it contains strictly more unique positive values than unique negative values.

Write a function that returns true if an array is positive dominant.

Examples
[1, 1, 1, 1, -3, -4] ➞ false
// there is only 1 unique positive value (1)
// there are 2 unique negative values (-3, -4)

[5, 99, 832, -3, -4] ➞ true

[5, 0] ➞ true

[0, -4, -1] ➞ false
Notes
0 neither counts as a positive nor a negative value.
*/

function isPositiveDominant(a) {
    let setP = new Set();
    let setN = new Set();

    a.forEach(e=> {
        if(e > 0) setP.add(e)
        else if(e < 0) setN.add(e)
    })
    if(setP.size > setN.size) return true

    return false
}
console.log(
isPositiveDominant([1, 2, 3, 1, -3, -4])
)