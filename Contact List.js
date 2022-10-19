/* 
Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

Examples
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Euler (EU) > Erdos (ER)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []
Notes
An array with a single name should be trivially returned.
An empty array, or an input of null or undefined should return an empty array.
*/

function sortContacts(names, sort) {
    const swap = (arr) => arr.map(e=> e.split(' ')[1] +" "+ e.split(' ')[0])

    if(!names) return []
    if(sort === "DESC") return swap(swap(names).sort().reverse())
    if(sort === "ASC")  return swap(swap(names).sort())
}
console.log(sortContacts([],"DESC"),
sortContacts(['John Locke', 'Thomas Aquinas', 'David Hume', 'Rene Descartes'], 'ASC')
)