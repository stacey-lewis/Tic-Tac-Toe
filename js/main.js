console.log("JS Main Linked");


// PART 1:
//JS backend

const tictactoegame = {

  winCriteria: [
    false,  //top-horizontal
    false,  //middle-horizontal
    false,  //bottom-horizontal
    false,  //left-vertical
    false,  //middle-vertical
    false,  //right-vertical
    false, //topLeft-diagonal
    false,  //topRight-diagonal
  ],

  player1Name: 'yourName',
  player2Name: 'yourName',

  turnCounter: 'Player 1', //replace with entered names?

  player1Winner: 'false',
  player2Winner: 'false',

  turnNotification: function () {
    if(this.turnCounter === 'Player 1') {
      this.turnCounter = 'Player 2';
    }
    else {
      this.turnCounter = 'Player 1';
    }
  }, //change turn counter

  gameOverCheckTwo: function () {
    if
      ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-2 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-3 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[0] ='true';
    }
    if
      ($('#item-4 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[1] ='true';
    }
    if
      ($('#item-7 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[2] ='true';
    }
    if
      ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-4 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[3] ='true';
    }
    if
      ($('#item-2 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[4] ='true';
    }
    if
      ($('#item-3 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[5] ='true';
    }
    if
      ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[6] ='true';
    }
    if
      ($('#item-3 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player1TokenBoard').css('visibility') == 'visible'
    ) {
    this.player1Winner = 'true';
    this.winCriteria[7] ='true';
    }
    if
      ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-2 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-3 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[0] ='true';
    }
    if
      ($('#item-4 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[1] ='true';
    }
    if
      ($('#item-7 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[2] ='true';
    }
    if
      ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-4 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[3] ='true';
    }
    if
      ($('#item-2 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-8 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[4] ='true';
    }
    if
      ($('#item-3 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-6 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[5] ='true';
    }
    if
      ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[6] ='true';
    }
    if
      ($('#item-3 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
      $('#item-7 .player2TokenBoard').css('visibility') == 'visible'
    ) {
    this.player2Winner = 'true';
    this.winCriteria[7] ='true';
    }




  },

  // gameOverCheck: function () {
  //   if (
  //     ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-2 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-3 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-4 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-6 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-7 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-8 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-4 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-7 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-2 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-8 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-3 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-6 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-1 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-9 .player1TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-3 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player1TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-7 .player1TokenBoard').css('visibility') == 'visible'
  //   )) { this.player1Winner = 'true'; }
  //   if (
  //     ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-2 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-3 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-4 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-6 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-7 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-8 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-4 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-7 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-2 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-8 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-3 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-6 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-1 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-9 .player2TokenBoard').css('visibility') == 'visible'
  //     ) ||
  //     ($('#item-3 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-5 .player2TokenBoard').css('visibility') == 'visible' &&
  //     $('#item-7 .player2TokenBoard').css('visibility') == 'visible'
  //   )) { this.player2Winner = 'true'; }
  // },

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
      tictactoegame.gameOverCheckTwo(); //check if player has won
      if (tictactoegame.player1Winner === 'true' ) {
        $('#msgDisplay').html("Game Over! Player 1 Wins!"); //if player won display win message

      //check which combination won, and activate correct CSS line.
      for (let i =0; i < tictactoegame.winCriteria.length; i++) {
        if (tictactoegame.winCriteria[i] === "true") {
          $('#strike-out' + i).css({'visibility': 'visible' });//activate the red line in the right spot based on hidden CSS elements
        } //end if
      } //end for
    } //end if player 1 wins
      if (tictactoegame.player2Winner === 'true' ) {
        $('#msgDisplay').html("Game Over! Player 2 Wins!"); //if player won display win message
        for (let i =0; i < tictactoegame.winCriteria.length; i++) {
          if (tictactoegame.winCriteria[i] === "true") {
            $('#strike-out' + i).css({'visibility': 'visible' });//activate the red line in the right spot based on hidden CSS elements
          } //end if
        } //end for
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

//Add cross out CSS element that appears based on who won
//Add condition to say there was no winner
//Add a reset board button

//Add page to entry to set player 1 vs player 2.
//Randomly select who goes first.
//Add scoring board (use bank methodology)
//Add scoring

//make board look better - bug colors
