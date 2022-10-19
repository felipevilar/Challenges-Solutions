/* 
Given an object containing the names and ages of a group of people, return the name of the oldest person.

Examples
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}) ➞ "Emma"

oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
}) ➞ "Sam"
Notes
All ages will be different.
*/

function oldest(people) {
    //let names = Object.keys(people)
    let ages = Object.entries(people)
    console.log(ages)
    let max = Math.max(...ages)

    return names[ages.indexOf(max)]
}
console.log(
oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33
  })
)