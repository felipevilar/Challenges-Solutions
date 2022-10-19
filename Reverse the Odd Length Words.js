/* 
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used.
*/

function reverseOdd(str) {
    let aux = str.split(' ')

    aux.forEach((vl,i) => {
        if(vl.length%2 !== 0)
            aux[i] = [...vl].reverse().join('')
    })
    
    return aux.join(' ')
}
console.log(
reverseOdd("One two three four")
)