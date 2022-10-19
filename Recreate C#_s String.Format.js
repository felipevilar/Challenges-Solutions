/* 
Recreate C#'s String.Format where the first argument is the string template and all subsequent arguments are the values for the corresponding placeholders in the template.

Examples
String.Format("{0}{1}{2}{1}{0}",  "k",  "a", "y") ➞ "kayak"

String.Format("Palindromes are {0}", "fun") ➞ "Palindromes are fun"

String.Format("Hello {0}.\nGeneral {1}",  "there",  "Kenobi") ➞ "Hello there.\nGeneral Kenobi"
Notes
N/A
*/

String.Format = function (template, values) {
     for(let i=0;i<arguments.length-1;i++) {
        let replaces = "\\{"+i+"\}"
        var re = new RegExp(replaces,"g");
        template = template.replace(re, arguments[i+1])
    }
    return template
}

String.Format("{0}{1}{2}{1}{0}",  "k",  "a", "y")
console.log(String.Format("Palindromes are {0}", "fun"))
