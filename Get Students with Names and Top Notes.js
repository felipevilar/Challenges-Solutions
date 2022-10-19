/* 
Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.

If student has no notes (an empty array) then let's assume topNote: 0.

Examples
[
  { name: "John", notes: [3, 5, 4]}
] ➞ [
  { name: "John", topNote: 5}
]
Notes
Try doing it with an arrow function.
*/

getStudentsWithNamesAndTopNotes = (students) => {
    const aux = students.map(e => {
        if(!e.notes || e.notes.length===0) e.notes = [0]
        return e = {'name': e.name, 'topNotes': Math.max(...e.notes)}
    })
    return aux
}
console.log(
getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [null,-1,null]},
    { name: "xxx", notes: [-1,2,8]},
    { name: "sss", notes: [5,2,4]}
]))