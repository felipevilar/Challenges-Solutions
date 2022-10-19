/*
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true
Notes
N/A
*/

function isSymmetrical(num) {
    let arr = []
    let capecua = ""
    let numStr = num.toString()

    for(let i in numStr) arr.unshift(numStr[i])

    for(let i in arr) capecua = capecua.concat(arr[i])

    capecua = parseInt(capecua)

    return num == capecua
}

console.log(isSymmetrical(1112111))