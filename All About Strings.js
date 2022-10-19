/*
Create a function that, given a string with at least three characters, returns an array of its:

Length.
First character.
Last character.
Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
Examples
allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]
Notes
N/A
*/

function allAboutStrings(str) {
    let strLen = str.length
    let middle = strLen/2
    let occurrence = str.indexOf(str[1], 2)

    return [strLen, 
            str[0], str[strLen-1], 
            (strLen%2===0) ? str[middle-1]+str[middle] : str[(parseInt(middle))],
            (occurrence !== -1) ? "@ index "+occurrence : "not found" ]
}

console.log(allAboutStrings("Computer"))
console.log(allAboutStrings("Science"))