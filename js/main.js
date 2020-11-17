console.log("JS Main Linked");


// PART 1:
//JS backend

const tictactoegame = {

  player1Name: 'yourName',
  player2Name: 'yourName',

  turnCounter: 'Player 1', //replace with entered names?

  Player1Winner: 'false',
  Player2Winner: 'false',

  turnNotification: function () {
    if(this.turnCounter === 'Player 1') {
      this.turnCounter = 'Player 2';
    }
    else {
      this.turnCounter = 'Player 1';
    }
  }, //change turn counter

  gameOverCheck: function () {
    if (
      ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-2 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-3 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-4 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-7 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-4 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-2 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-3 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-3 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player1TokenBoard').css('visibility') == 'visible'
    )) { this.Player1Winner = 'true'; }
    if (
      ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-2 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-3 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-4 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-7 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-4 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-2 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-3 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
      ) ||
      ($('#item-3 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player2TokenBoard').css('visibility') == 'visible'
    )) { this.player2Winner = 'true'; }
  },

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

$('.playSquare').on("click", function () {
  $('#msgDisplay').html("");
// debugger;
  //check if square has been played. if so, do nothing except change html.
  //check if images are visible
  if ($(this).find('.player1TokenBoard').css('visibility') == 'hidden' &&
      $(this).find('.player2TokenBoard').css('visibility') == 'hidden' ) {
      //check who played, and make their counter appear in the square.
      if(tictactoegame.turnCounter === 'Player 1') {
        $(this).find('.player1TokenBoard').css({'visibility': 'visible'});
      } // end if
      else {
        $(this).find('.player2TokenBoard').css({'visibility': 'visible'});
      } //end else
      tictactoegame.gameOverCheck(); //check if player has won
      if (tictactoegame.Player1Winner === 'true' ) {
        $('#msgDisplay').html("Game Over! Player 1 Wins!"); //if player won display win message
        //-----------------ADD CROSS OUT OPTIONS TO BOARD----------------
      }
      if (tictactoegame.Player2Winner === 'true' ) {
        $('#msgDisplay').html("Game Over! Player 2 Wins!"); //if player won display win message
      //  $('.playSquare').click(false); ------------ADD CLICK DISABLER
        //-----------------ADD CROSS OUT OPTIONS TO BOARD----------------
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
  // if (tictactoegame.Player2Winner === true || tictactoegame.Player1Winner === true){
  //   $('#msgDisplay').html('The game is over, stop trying to play...');
  // }
}); //.playSquare click


//TO DO:

//make board look better.
//Add page to entry to set player 1 vs player 2.
//Randomly select who goes first.
//Add cross out CSS element that appears based on who won


//Add scoring board (use bank methodology)
//De-activate clicker on game over and re-set board button.
//Clean up game win checker... carry through from function or can you do "."+'xxx' add text???





//PART 3: Interactive with names
//Enter name for player 1 player 2, show them their tokens.
