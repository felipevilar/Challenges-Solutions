/* 
Object destructuring: renaming properties and adding default values

const obj =  { first: "James", last: "Baker", alias: "JB"  }

var { first = "John", last = "Doe", alias } = obj

console.log(nickname) // outputs nickname is not defined
There may be times where we would like the property name to be different from the object property names we receive and also give those 
new property names a default value

Challenge
Use es6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD".
Ignore the .toString() function (used for validation)
Notes
If you know how to use object destructuring then go ahead and complete the challenge, 
otherwise check out the Resource links, look at some examples and then comeback and try out the challenge.
*/

const str = `({ first = "John", last = "Doe", alias } = { first: "James", last: "Baker" }).toString()`
var {alias: nickname = "JD"} = obj
const obj =  { first: "James", last: "Baker", alias: "JB"  }

var { first = "John", last = "Doe", alias } = obj

var { alias: nickname = "JD"} = obj

console.log(nickname) // outputs nickname is not defined
console.log(obj);