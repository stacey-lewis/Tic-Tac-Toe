console.log("JS Main Linked");


// PART 1:
//JS backend

const tictactoegame = {

  boardSquares: { //object to contain current board play fill
    topLeft: 'topLeft',
    topMiddle: 'topMiddle',
    topRight: 'topRight',
    middleLeft: 'middleLeft',
    centre: 'centre',
    middleRight: 'middleRight',
    bottomLeft: 'bottomLeft',
    bottomMiddle: 'bottomMiddle',
    bottomRight: 'bottomRight'
  },

  player1Name: 'yourName',
  player2Name: 'yourName',

  turnCounter: 'Player 1', //replace with entered names?
  gameInPlay: 'true',

  turnNotification: function () {
    if(this.turnCounter === 'Player 1') {
      this.turnCounter = 'Player 2';
    }
    else {
      this.turnCounter = 'Player 1';
    }
  }, //change turn counter

  gameOverCheck: function () {
  //combinations
  if ((this.boardSquares.topLeft === this.boardSquares.topMiddle && this.boardSquares.topMiddle === this.boardSquares.topRight) ||
    (this.boardSquares.middleLeft === this.boardSquares.centre && this.boardSquares.centre === this.boardSquares.middleRight) ||
    (this.boardSquares.bottomLeft === this.boardSquares.bottomMiddle && this.boardSquares.bottomMiddle === this.boardSquares.bottomRight) ||
    (this.boardSquares.topLeft === this.boardSquares.middleLeft && this.boardSquares.middleLeft === this.boardSquares.bottomLeft) ||
    (this.boardSquares.topMiddle === this.boardSquares.centre && this.boardSquares.centre === this.boardSquares.bottomMiddle) ||
    (this.boardSquares.topRight === this.boardSquares.middleRight && this.boardSquares.middleRight === this.boardSquares.bottomRight) ||
    (this.boardSquares.topLeft === this.boardSquares.centre && this.boardSquares.centre === this.boardSquares.bottomRight) ||
    (this.boardSquares.topRight === this.boardSquares.centre && this.boardSquares.centre === this.boardSquares.bottomLeft)) {
    this.gameInPlay = 'true';
  }
  else {
    this.gameInPlay = 'false';
  }},

  updateHTML: {
    updateTurnHTML: function () {
      if(tictactoegame.turnCounter === 'Player 1') {
        $('#player1 .turnNote').html("Your Turn");
        $('#player2 .turnNote').html("");
      } //end if
      else {
        $('#player2 .turnNote').html("Your Turn");
        $('#player1 .turnNote').html("");
      } // end else
    },

  },
}; //end tictactoegame


//sequence of play
//assign starting player (start as default) - ignore for now

$('.playSquare').on("click", function () {
  $('#msgDisplay').html("");
// debugger;
  //check if square has been played. if so, do nothing except change html.
  //check if images are visible
  if ($(this).find('.player1TokenBoard').css('visibility') == 'hidden' ||
      $(this).find('.player2TokenBoard').css('visibility') == 'hidden' ) {
      //check who played, and make their counter appear in the square.
      if(tictactoegame.turnCounter === 'Player 1') {
        $(this).find('.player1TokenBoard').css({'visibility': 'visible'});
        //--------------UPDATE OBJECT----------------
      } // end if
      else {
        $(this).find('.player2TokenBoard').css({'visibility': 'visible'});
        //-------------UPDATE OBJECT -----------------------
      } //end else
      //check if player has won
      tictactoegame.gameOverCheck();
      //if player won display win message
      if (tictactoegame.gameInPlay === 'true' ) {
        $('#msgDisplay').html("Game Over!");
        //-----------------ADD CROSS OUT OPTIONS TO BOARD---------------------
      }
      // if no winner, change player turn & update HTML
      else {
        tictactoegame.turnNotification();
        tictactoegame.updateHTML.updateTurnHTML();
      } //end else
    } //end if
  else
  { // message to play a different square
    $('#msgDisplay').html("Please choose another square, that one has been played");
  }


}); //.playSquare click

let player1Game = [
1,
2,
3,
4,
5,
6,
7,
8,
9
];

console.log (player1Game, 'player1Game');



let player1 = $('.player1TokenBoard');

console.log (player1, 'player 1');
for (let i=0; i < player1.length; i++) {
  if( $('player1[i]').css('visibility:') === 'visible') {
    player1Game(i) === 'player1';
    console.log (player1Game, 'player1Game');
  } //end if
};
//----------------------add condition for draw --------------------------

//listen for click on squares for each:
  //if turnCounter==='Player1', - may not need ...
  //if boardsquares === turnCounter[Player1 or two] || boardsquares === turnCounter[Player1 or two] - then alert message. & end
  //else change boardsquares[x] to turnCounter[Player1].
  // assign ACCESSDOM (visbility = visible) to player1 or 2 based on who is playing.
  // run GameOvercheck if TRUE, message to change to game over, otherwise -
  // turnNotification()


  //----------------------COPY OF CLICK ----------------------------------

  // $('.playSquare').on("click", function (ev) {
  //   if(
  //     $('#item-1 > .player1TokenBoard').css({'visibility': 'hidden'}) &&
  //     $('#item-1 > .player2TokenBoard').css({'visibility': 'hidden'})
  //     ) {
  //       if (tictactoegame.turnCounter === 'Player 1') {
  //         $('#item-1 > .player1TokenBoard').css({'visibility': 'visible'});
  //       } //end if
  //       else {
  //         $('#item-1 > .player2TokenBoard').css({'visibility': 'visible'});
  //       } //end else
  //   } //end if
  //   else {
  //
  //   }
  // });

  //----------------------COPY OF CLICK ----------------------------------


//PART 3: Interactive with names
//Enter name for player 1 player 2, show them their tokens.
