/*
Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
Notes
N/A
*/

function mapping(letters) {
    let obj = {}
    
    for(let i of letters)
        obj[i] = i.toUpperCase()

    return obj
}

console.log(mapping(["a", "v", "y", "z"]))