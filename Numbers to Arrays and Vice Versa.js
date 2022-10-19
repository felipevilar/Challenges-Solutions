/*
Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0
*/

function toArray(num) {
    let aux = num.toString()
    let toArray = []

    for(let i=0; i<aux.length;i++) toArray.push(parseFloat(aux[i]))

    return toArray
}

function toNumber(arr) {
    let toStr = ""

    for(let i in arr) {
        toStr += arr[i].toString()
    }

    return parseFloat(toStr)
}

console.log(toArray(0))
//console.log(toNumber([0]))