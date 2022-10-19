/*
Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples
countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4
Notes
a, e, i, o, u are considered vowels (not y).
All test cases are one word and only contain letters.
*/

function countVowels(str) {
    let count = 0
    let downCase = str.toLowerCase();
    console.log(downCase[0])

    for(let i in downCase) {
        if( downCase[i] == "a" ||
            downCase[i] == "e" || downCase[i] == "i" ||
            downCase[i] == "o" || downCase[i] == "u") count++
    }
    
    return count
}

console.log(countVowels("DaniloeGay"))