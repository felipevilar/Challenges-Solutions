/* 
Create a function that returns the smallest number of letter removals so that two strings are anagrams of each other.

Examples
minRemovals("abcde", "cab") ➞ 2
// Remove "d", "e" to make "abc" and "cab".

minRemovals("deafk", "kfeap") ➞ 2
// Remove "d" and "p" from the first and second word, respectively.

minRemovals("acb", "ghi") ➞ 6
// Remove all letters from both words to get "" and "".
Notes
An anagram is any string that can be formed by shuffling the characters of the original string. For example: baedc is an anagram of abcde.
An empty string can be considered an anagram of itself.
Characters won't be used more than once per string.
*/

function minRemovals(str1, str2) {
    let arr = [...str1].filter(letters => ![...str2].includes(letters))
    let arr2 = [...str2].filter(letters => ![...str1].includes(letters))
    console.log(arr,arr2);
    return arr+arr2
}
console.log(
minRemovals("", "a"),
// Remove "d", "e" to make "abc" and "cab".
minRemovals("deafk", "kfeap"),
// Remove "d" and "p" from the first and second word, respectively.
minRemovals("acb", "ghi")
)