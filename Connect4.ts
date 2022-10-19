/*
Introduction
We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided 
to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and 
“Captain’s Mistress" but was made popular by Hasbro MB Games
Connect 4
Task
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. 
The pieces fall straight down, occupying the next available space within the column. The objective of the game 
is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument 
for the column where the player is going to place their disc.
Rules
If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” 
where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next 
move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.
Good luck and enjoy!
*/

export class Connect4 {
  private turn = 1
  private winner = 0
  private fullLine = 3
  private gameRows = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ]
  private gameColumn = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
  ]

  play(columnNumber: number): void | string {
    if(this.isValidPlay(columnNumber)) {
      const empty = this.emptySlot(columnNumber)
      console.log(empty)
      if(empty === -1) {
        return "Column full!"
      }

      this.gameRows[empty][columnNumber] = this.turn
      this.gameColumn[columnNumber][empty] = this.turn

      const horizontalWin = this.gameRows.some(el => el.toString().match(/(1,1,1,1|2,2,2,2)/gm))
      const verticalWin = this.gameColumn.some(el => el.toString().match(/(1,1,1,1|2,2,2,2)/gm))
      
      if(horizontalWin || verticalWin) return `Player ${this.turn} wins!`
      this.turn === 1 ? this.turn = 2 : this.turn = 1
    }
  }

  private isValidPlay(columnNumber: number): boolean {
    if(columnNumber >= 0 && columnNumber < this.gameRows.length) {
      return true
    }
    return false
  }
  private emptySlot(columnNumber: number): number {
    return this.gameRows.map(el => el[columnNumber]).findIndex(el => el === 0)
  }
}

const connect4 = new Connect4()
connect4.play(0)
connect4.play(1)
connect4.play(0)
connect4.play(1)
connect4.play(0)
connect4.play(1)
connect4.play(0)

