/*
Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

Examples
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
Notes
N/A
*/

function reverseCase(str) {

    let i
    let newStr = ""

    function isUpperCase(x) {
        return (x == x.toUpperCase())
    }
    
    for(i=0;i<str.length;i++) {
        if(isUpperCase(str[i])) newStr += str[i].toLowerCase()
        else newStr += str[i].toUpperCase()
    }

    return newStr
    
}

console.log(reverseCase("Happy Birthday"))