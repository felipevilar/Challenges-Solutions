/* 
lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

Somehow my strings have all become mixed up; every pair of characters has been swapped. Help me undo this so I can understand my strings again.

Examples
unmix("123456") ➞ "214365"

unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."

unmix("badce") ➞ "abcde"
Notes
The length of a string can be odd — in this case the last character is not altered (as there's nothing to swap it with).
*/

function unmix(str) {
    let arr = []

    for(let i=0;i<str.length;i+=2) arr.push(str.slice(i,i+2))

    return arr.map(e => e.split('').reverse().join('')).join('')
}