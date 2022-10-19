/* 
Write a function that groups a string into parentheses cluster. Each cluster should be balanced.

Examples
split("()()()") ➞ ["()", "()", "()"]

split("((()))") ➞ ["((()))"]

split("((()))(())()()(()())") ➞ ["((()))", "(())", "()", "()", "(()())"]

split("((())())(()(()()))") ➞ ["((())())", "(()(()()))"]
Notes
All input strings will only contain parentheses.
Balanced: Every opening parens ( must exist with its matching closing parens ) in the same cluster.
*/


function split(str) {
    let arr = []
    let split = str.split('')
    let group = ''
    let count = 0
    split.forEach(el => {
        if(el === '(') {
            group += el
            count++
        } else if(el === ')') {
            group += el
            count--
        }
        if(count === 0) {
            arr.push(group)
            group = ''
        }
    })
    return arr
}
console.log(
split("(((4))())(()(()()))")
)