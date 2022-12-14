/* 
You are given two inputs:

An array of abbreviations.
An array of words.
Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

Examples
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true
Notes
Abbreviations will be a substring from [0, n] from the original string.
*/

// Should return m mod n
function uniqueAbbrev(abbs, words) {
    let aux = []
    abbs.forEach(el => {
        words.forEach(wrd => {
            if(wrd.startsWith(el)) aux.push(el)
        })
    })
    return aux.toString() === abbs.toString()
}
console.log(
    uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])
)