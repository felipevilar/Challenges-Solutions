/*
Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
Examples
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"
Notes
0 should be treated as an even number.
*/

function indexShuffle(str) {

    let strEven = ""
    let strOdd = ""
    let indexShuffle = ""
    let i
    
    for(i=0;i<str.length;i+=2) strEven += str[i]
    for(i=1;i<str.length;i+=2) strOdd += str[i]

    indexShuffle = strEven+strOdd

    return indexShuffle
    
}

console.log(indexShuffle("012"))