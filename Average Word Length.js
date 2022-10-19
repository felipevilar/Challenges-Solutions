/*
Create a function that takes in a sentence and returns the average length of each word in that sentence. Round your result to two decimal places.

Examples
averageWordLength("A B C.") ➞ 1.00

averageWordLength("What a gorgeous day.") ➞ 4.00

averageWordLength("Dude, this is so awesome!") ➞ 3.80
Notes
Ignore punctuation when counting the length of a word.
*/

function averageWordLength(str) {
    let aux = str.split(' ').map(e => e.replace(/\W+/g,"").length)
    let size = aux.length
    let total = aux.reduce((acc,vl, i, arr) => acc + vl, 0)
    let result = (total/size).toFixed(2)
    return parseFloat(total);
}

averageWordLength("Dude, this is so awesome!")