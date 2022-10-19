/*
Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

Examples
factorial(3) ➞ 6

factorial(5) ➞ 120

factorial(13) ➞ 6227020800

Notes
Assume all inputs are greater than or equal to 0.
*/

function factorial(int) {
    if(int == 1 || int == 0) return 1
    return int*factorial(int-1)
}

console.log(factorial(13))