/* 
Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).

Example
longestStreak([
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-26"
  },
  {
    "date": "2019-09-27"
  },
  {
    "date": "2019-09-30"
  }
]) ➞ 3
Notes
An empty array should return 0.
*/
function countDiffHours(date1, date2) {
    return (new Date(date2)-new Date(date1) === 86400000)
}
function longestStreak(arr) {
  let sequence = []
  let i, k=0
  let arrLength = arr.length

  if(arrLength === 0 ) return 0
  if(arrLength === 1) return 1

  for(i=0;i<arrLength-1;i++) {
      if(countDiffHours(arr[i].date, arr[i+1].date)) {
          (!sequence[k]) ? sequence[k] = 2 : sequence[k]++;
      } else {
          k++
      }
  }
  return sequence.sort((a,b) => b-a).shift()
}

console.log(
  longestStreak([
    {
      "date": "1985-03-19"
    },
  ]))