/*
A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.

Nesting 3 times with the word "incredible":

start  = incredible
first  = incre|incredible|dible
second = increin|incredible|credibledible
third  = increinincr|incredible|ediblecredibledible
The final nest is "increinincrincredibleediblecredibledible" (depth = 3).

Given a starting word and the final word nest, return the depth of the word nest.

Examples
wordNest("floor", "floor") ➞ 0

wordNest("code", "cocodccococodededeodeede") ➞ 5

wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3
Notes
N/A
*/

function wordNest(word, nest) {
    let depth = 0
    let indexOf
    const wordLength = word.length

    while(nest.indexOf(word) != -1) {
        indexOf = nest.indexOf(word)
        nest = nest.substring(0,indexOf) + nest.substring(indexOf+wordLength,nest.lenght)
        depth++
    }

    return depth-1 
}

console.log(wordNest("floor", "floor"))

arr = [1,4,536,2354]