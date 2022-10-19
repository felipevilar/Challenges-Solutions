/*
Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there 1 person, return "[user1] online".
If there are 2 people, return [user 1] and [user 2] online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"[user1], [user2] and 3 more online"
Examples
chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "parIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
➞ "pap_ier44, townieBOY and 4 more online"
*/

function chatroomStatus(users) {
    if(users){
        let tamArr = users.length

        if(tamArr == 0) {
            return "no one online"
        } else if(tamArr == 1) {
            return `${users[0]} online` 
        } else if(tamArr == 2) {
            return `${users[0]} and ${users[1]} online`
        } else {
            return `${users[0]}, ${users[1]} and ${tamArr-2} more online`
        }
	} else {
        return "Erro!"
    }
}

console.log(chatroomStatus())