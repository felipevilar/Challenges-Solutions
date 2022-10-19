/*Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

Examples
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "d", "eeee"]

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]

identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []
Notes
A string with a single character is trivially counted as a string with repeating identical characters.
If there are no strings with repeating identical characters, return an empty array (see example #3).*/

function identicalFilter(arr) {
    
    arr = arr.filter((a) => {
        if(a.length == 1) return true
        for(let k=0;k<a.length;k++) if(a[0] != a[k]) return false
        return true
    })

    return arr
}

console.log(identicalFilter(["aaaaaab", "bc", "d", "eeee", "xyz"]) )