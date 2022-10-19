/* Create a function that takes an array of students and returns an array of their top notes. If student does not have notes then let's 
assume their top note is equal to 0.

Examples
getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]) ➞ [5, 5, 4]
Notes
Try it with Array.prototype.map and Array.prototype.reduce.
Alternatively use Math.max instead of Array.prototype.reduce. */

function getStudentTopNotes(students) {
	return students.map(a => Math.max(...a.notes, 0))
}
console.log(
getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    },
    {
        id: 3,
        name: "Zygmunt",
        notes: []
      }
  ])
)