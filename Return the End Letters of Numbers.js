/*
Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th etc.

Examples
returnEndOfNumber(553) ➞ "553-RD"

returnEndOfNumber(34) ➞ "34-TH"

returnEndOfNumber(1231) ➞ "1231-ST"

returnEndOfNumber(22) ➞ "22-ND"
Notes
Check the Resources tab for more info on ordinal numbers.
*/

function returnEndOfNumber(num) {
    let numToString = num.toString()
    let lastDigit = numToString[numToString.length-1]
    
    switch (lastDigit) {
        case "1":
            return num+"-ST"
            break;
        
        case "2":
            return num+"-ND"
            break;

        case "3":
            return num+"-RD"
            break;
        
        default:
            return num+"-TH"
            break;
    }
    
}

console.log(returnEndOfNumber(123))
