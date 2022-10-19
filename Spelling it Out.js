/*Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

Examples
spelling("bee") ➞ ["b", "be", "bee"]

spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]*/

function spelling(str) {
    let aux = []
    let strAux = ""
    for(let i=0;i<str.length;i++) {
        strAux = strAux+str[i]
        aux.push(strAux)
    }

    return aux
}

console.log(spelling("happy"))