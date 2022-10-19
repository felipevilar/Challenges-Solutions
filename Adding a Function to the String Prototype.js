/* 
One of the fun parts of JavaScript is that you can extend all the standard types by extending their prototype. 
In this challenge, you need to give JavaScript Strings a swapCase() function, which will return a new string with all upper case characters swapped 
for lower case characters, and vice versa. Any non-alphabetic characters should be kept as they are.

Examples
"Hello".swapCase() ➞ "hELLO"

"2 4 6 8 WHO DO WE APPRECIATE?".swapCase() ➞ "2 4 6 8 who do we appreciate?"

"aBcD".swapCase().swapCase() ➞ "aBcD"
Notes
swapCase() should not alter the original string.
Although you can add new functions to the standard data types, it's not generally a good idea in large projects!
*/

String.prototype.swapCase = function () {
    let aux = [...this] 
    this.verifyUpperCase = c => (c === c.toUpperCase()) ? true:false
    let swapper = aux.map(a => this.verifyUpperCase(a) ? a.toLowerCase() : a.toUpperCase())
    return swapper.join('')
}
