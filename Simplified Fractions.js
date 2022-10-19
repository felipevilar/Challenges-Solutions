/* 
Create a function that returns the simplified version of a fraction.

Examples
simplify("4/6") ➞ "2/3"

simplify("10/11") ➞ "10/11"

simplify("100/400") ➞ "1/4"

simplify("8/4") ➞ "2"
Notes
A fraction is simplified if there are no common factors (except 1) between the numerator and the denominator. 
For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.
If improper fractions can be transformed into integers, do so in your code (see example #4).
*/

function simplify(str) {
    let aux = str.split('/')
    let x = parseInt(aux[0])
    let y = parseInt(aux[1])

    const getDivs = (number1, number2) => {
        let k = 2; let arr = []
        while(number1 !== 1 && number2 !== 1) {
            if(number1%k === 0 && number2%k === 0) { arr.push(k); number1 = number1/k; number2 = number2/k }
            else if(number1%k === 0) number1 = number1/k;
            else if(number2%k === 0) number2 = number2/k;
            else k++
        }
        return arr
    }

    // if(x%y === 0) return ""+x/y
    // if(y%x === 0) return "1/"+(y/x)
    let mcd = getDivs(x,y).reduce((acc,vl) => acc*vl, 1)
    return (x/mcd)+"/"+(y/mcd) 
}
console.log(
simplify("8/4")
)