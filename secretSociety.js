/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPR

*/

function societyName(friends) {
    let str = ""
    
    const aux = (friends.map((value) => value[0].toUpperCase(), friends).sort()).map(
        (value) => str = str.concat(value[0]))

    return str
}


console.log(societyName(["adam", "sarah", "Malcolm"]))