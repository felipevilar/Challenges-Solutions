/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without regex.
*/

function numInStr(arr) {
    let aux = []

    for(let p in arr) {
        for(let i=0;i<10;i++) {
            if(arr[p].indexOf(""+i) != -1) {
                aux.push(arr[p])
                break
            }
        }
    }

    return aux
    
}

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))