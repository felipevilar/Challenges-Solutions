function firstVowel(str) {
    const arr = []
    let sortedArr = []
    
    const pushVogal = (a) => {
        let indexOf = str.indexOf(a)
        if(indexOf != -1 ) arr.push(indexOf)
    }
    
    pushVogal("a"); pushVogal("e"); pushVogal("i"); pushVogal("o"); pushVogal("u");
    pushVogal("A"); pushVogal("E"); pushVogal("I"); pushVogal("O"); pushVogal("U");
    
    sortedArr = arr.sort((a,b) => a-b);    
    
    return sortedArr.shift()
}
console.log(
    firstVowel("apple") ,

    firstVowel("hello") ,
    
    firstVowel("STRAWBERRY") ,
    
    firstVowel("pInEaPPLe")

)