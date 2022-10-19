/*
Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

Example #1
// The first object parameter.

{
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ false
Example #2
// The first object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ true
Notes
If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.
*/

const objOne = {
    foo: {
      bar: {
        baz: "edabit.com"
      },
      baz: {
        userIds: {
          jason: 76397,
          steve: 73073,
          joe: 21076
        }
      }
    }
  }

  const objTwo = {
    foo: {
      bar: {
        baz: "edabit.com"
        },
      baz: {
        userIds: {
          jason: 76397,
          steve: 73073,
          joe: 21076
          }
      }
    }
  }

  
function isEqual(objOne, objTwo) {
    return JSON.stringify(objOne) == JSON.stringify(objTwo)
}

console.log(isEqual(objOne,objTwo))
  
