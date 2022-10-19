/*
Create a function to convert an array of percentages to their decimal equivalents.

Examples
convertToDecimal(["1%", "2%", "3%"]) ➞ [0.01, 0.02, 0.03]

convertToDecimal(["45%", "32%", "97%", "33%"]) ➞ [0.45, 0.32, 0.97, 0.33]

convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞ [0.33, 0.981, 0.5644, 1]
Notes
N/A
*/

function convertToDecimal(perc) {

    function transformPerc(vl, ch) {

        vl = vl.replace("%","")
        vl = parseFloat(vl)
        vl = vl/100

        return vl
    }

    return perc.map(transformPerc)
}

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))