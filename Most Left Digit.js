/*
Write a function that takes a string as an argument and returns the left most digit in the string.

Examples
leftDigit("TrAdE2W1n95!") ➞ 2

leftDigit("V3r1ta$") ➞ 3

leftDigit("U//DertHe1nflu3nC3") ➞ 1

leftDigit("J@v@5cR1PT") ➞ 5
Notes
Each string will have at least two numbers.
*/
console.log("Parse 0: "+parseInt("0"))

function leftDigit(num) {
    for(let i=0;i<num.length;i++) {
        let parse = parseInt(num[i])
        if(parse || parse == 0) return parse
    }
}


console.log(
    leftDigit("TrAdE2W1n95!") ,
    leftDigit("V3r1ta$") ,

    leftDigit("U//DertHe1nflu3nC3") ,

    leftDigit("J0v@5cR1PT"),
)
