/*
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper and lower case letters the same.
*/

function capToFront(s) {
    let str = ""
    let strLower = ""

    for(let i=0;i<s.length;i++) {
        if(s[i] == s[i].toUpperCase()) str += s[i]
        else strLower += s[i]
    }
    return str+strLower
}

console.log(capToFront("AbCd"))