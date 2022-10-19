/* Create a function that determines whether or not a player is holding a Full House in their hand. A hand is represented as an array of 5 cards.
A full house is defined as a pair of cards and a three-of-a-kind.

To illustrate: ["A", "A", "A", "K", "K"] would be a Full House, since the player holds 3 aces and 2 kings.

Examples
isFullHouse(["A", "A", "A", "K", "K"]) ➞ true

isFullHouse(["3", "J", "J", "3", "3"]) ➞ true

isFullHouse(["10", "J", "10", "10", "10"]) ➞ false

isFullHouse(["7", "J", "3", "4", "2"]) ➞ false
Notes
N/A */

function isFullHouse(hand) {
    let n=0;
    let aux = new Set()
    hand.map(e => aux.add(e))
    if(aux.size!==2) return false
    hand.forEach(e => { if(e===aux.values().next().value) n++ })
    if(n===2 || n===3) return true
    return false;
}
console.log(aux);
console.log(
isFullHouse(["A", "K", "A", "A", "K"])
)