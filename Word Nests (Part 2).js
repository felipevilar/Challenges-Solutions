/* 
A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.

Nesting 3 times with the word "incredible":

start  = incredible
first  = incre|incredible|dible
second = increin|incredible|credibledible
third  = increinincr|incredible|ediblecredibledible
The final nest is increinincrincredibleediblecredibledible (depth = 3)

Valid word nests can always be collapsed to show the starting word. Given a starting word and a final word nest, 
return true if the word nest is valid. Return false otherwise.

Examples
validWordNest("deep", "deep") ➞ true

validWordNest("novel", "nonnonovnovnovelelelvelovelvel") ➞ true

validWordNest("shape", "sssshapeshapehahapehpeape") ➞ false
// Word placed outside, not inside.

validWordNest("painter", "ppaintppapaipainterinternteraintererainter") ➞ false
// Doesn't show starting word after being collapsed.
Notes
N/A
*/

function validWordNest(word, nest) {
    const instances = (nest.match(new RegExp(word, 'g')) || []).length;
    if(instances > 1) return false

    while(nest.indexOf(word) !== -1) {
        nest = nest.replace(word,"")
    }
    return (nest) ? false : true
}
console.log(
validWordNest("broadcbroadcastbroadcastast", "broadcbroadcastbroadcastast"),
validWordNest("novel", "quaquarrquarrelrerell")
)
