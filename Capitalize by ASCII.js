
/*
Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

Examples
asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."
Notes
N/A
*/

function asciiCapitalize(str) { 
    return str
    .split('')
    .map(c => (c.charCodeAt()%2 == 0) ? c.toUpperCase() : c.toLowerCase())
    .join('')
}

console.log(asciiCapitalize("to be or not to be!"))