/*
Write a function that reverses all the words in a sentence which contains a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
Notes
Reverse the words themselves, not the entire sentence.
All characters in the sentence will be in lower case.
*/

function specialReverse(s, c) {
    let aux = s.split(" ")
    for(let i in aux) {
        if(aux[i].indexOf(c) !== -1)
            aux[i] = aux[i].split('').reverse().join('')
    }

    return aux.join(' ')
}

console.log(specialReverse("word searches are super fun", "s"))