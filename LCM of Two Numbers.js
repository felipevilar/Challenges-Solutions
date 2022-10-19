/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

function lcm(n1, n2) {
    let i = 2
    let lcm = 1
    
    while(n1 !== 1 || n2 !== 1) {
        if(n1%i == 0 && n2%i == 0) {
            lcm *= i
            n1 = n1/i
            n2 = n2/i
        } else if(n1%i == 0) {
            lcm *= i
            n1 = n1/i
        } else if(n2%i == 0) {
            lcm *= i
            n2 = n2/i
        }

        if(n1%i != 0 && n2%i != 0) i++
    }
    
    return lcm
}

console.log(lcm(21, 32))