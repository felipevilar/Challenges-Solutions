/*
Create a function that for a given number to get all 2 number combinations of numbers thaton addition give that number.

Start from 1 , Dont consider 0's or negative numbers.

The output is an array of array of numbers in which the first number is in ascending order. The order is important to make the test pass..

Examples

combinations(10) = [[1,9],[2,8],[3,7],[4,6],[5,5]] 

combinations(5)  ➞ [[1,4],[2,3]]

combinations(2)  ➞ [[1,1]]
Notes

The test check for numbers less than or equal to 10
Remember to return the result
The order of values in both arrays matter
*/

function combinations(number) {
    let auxArr = []

    function compreSum(a,b,n) {
        return ((a+b) == n)
    }

    for(i=1;i<=number;i++) {
        for(j=1;j<=i;j++) {
            if(compreSum(i,j,number)) auxArr.push([j,i])
        }
    }
    return auxArr.reverse()
}

console.log(combinations(10))

