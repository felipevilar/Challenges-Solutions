/*
Create a function that will find all primes below a given number. Return the result as an array.

Examples
primesBelowNum(5) ➞ [2, 3, 5]

primesBelowNum(10) ➞ [2, 3, 5, 7]

primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]
Notes
If n is a prime, it is included in the array.
*/

function primesBelowNum(n) {
    let arrPrimes = []

    function isPrime(n) {
        let count = 0
        let i

        for(i=2;i<n;i++)
            if(n%i == 0) count++

        return (count == 0)
    }

    for(let i=2;i<n;i++)
        if(isPrime(i)) arrPrimes.push(i)

    return arrPrimes
}

console.log(primesBelowNum(20))

