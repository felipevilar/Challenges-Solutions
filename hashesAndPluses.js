/*
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses].

*/

function hashPlusCount(str) {
    if(str) {
        let hashCount = 0, plusCount = 0
        for(let i in str) {     
            if(str[i] == "#") hashCount++
            if(str[i] == "+") plusCount++
        }

        return [hashCount, plusCount]

    } else {
        return [0,0]
    }
}
console.log(
    hashPlusCount("###+") ,

    hashPlusCount("##+++#") ,
    
    hashPlusCount("#+++#+#++#") ,
    
    hashPlusCount("") 
)