/*
Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

Examples
sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"
Notes
The name you return must be capitalized.

*/

function sayHelloBye(name, num) {
    let nameCap = name.replace(name[0], name[0].toUpperCase())
    if(num == 1) return `Hello ${nameCap}`
    if(num == 0) return `Bye ${nameCap}`
}