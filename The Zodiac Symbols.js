/*
In Western astrology, there are twelve possible date intervals for establishing the zodiac sign of a person, with each sign having its own symbol.

Sign	Symbol	Interval
Aries	♈	March 21 – April 20
Taurus	♉	April 21 – May 21
Gemini	♊	May 22 – June 21
Cancer	♋	June 22 – July 22
Leo	♌	July 23 – August 22
Virgo	♍	August 23 – September 23
Libra	♎	September 24 – October 23
Scorpio	♏	October 24 – November 22
Sagittarius	♐	November 23 – December 21
Capricorn	♑	December 22 – January 20
Aquarius	♒	January 21 – February 19
Pisces	♓	February 20 – March 20
Given a string dob being a date of birth in the U.S. full format, implement a function that returns the related zodiac symbol accordingly to the table above.

Examples
zodiacSymbol("May 9, 1951") ➞ "♉"
// Taurus

zodiacSymbol("October 31, 1977") ➞ "♏"
// Scorpio

zodiacSymbol("January 19, 1985") ➞ "♑"
// Capricorn
Notes
A list of the Unicode characters to return is already given in the Code tab.
In each date interval listed into the table, the starting date and the end date are the inclusive bounds of the range to consider.
*/

const SYMBOLS = ["♈", "♉", "♊", "♋", "♌", "♍",
								 "♎", "♏", "♐", "♑", "♒", "♓"];

function zodiacSymbol(dob) {
    let dobSplit = dob.split(',')
    let monthDay = new Date(dobSplit[0])
    
    if(monthDay >= new Date("January 21") && monthDay <= new Date("February 19")) {
        return SYMBOLS[10]
    } else if(monthDay >= new Date("February 20") && monthDay <= new Date("March 20")) {
        return SYMBOLS[11]
    } else if(monthDay >= new Date("March 21") && monthDay <= new Date("April 20")) {
        return SYMBOLS[0]
    } else if(monthDay >= new Date("April 21") && monthDay <= new Date("May 21")) {
        return SYMBOLS[1]
    } else if(monthDay >= new Date("May 22") && monthDay <= new Date("June 21")) {
        return SYMBOLS[2]
    } else if(monthDay >= new Date("June 22") && monthDay <= new Date("July 22")) {
        return SYMBOLS[3]
    } else if(monthDay >= new Date("July 23") && monthDay <= new Date("August 22")) {
        return SYMBOLS[4]
    } else if(monthDay >= new Date("August 23") && monthDay <= new Date("September 23")) {
        return SYMBOLS[5]
    } else if(monthDay >= new Date("September 24") && monthDay <= new Date("October 23")) {
        return SYMBOLS[6]
    } else if(monthDay >= new Date("October 24") && monthDay <= new Date("November 22")) {
        return SYMBOLS[7]
    } else if(monthDay >= new Date("November 23") && monthDay <= new Date("December 21")) {
        return SYMBOLS[8]
    } else { 
        return SYMBOLS[9]
    }
}
console.log(
zodiacSymbol("January 19, 1985")
)