console.log("JS Main Linked");





//----------------------------BACK END GAME FUNCTIONALITY---------------------------//
const tictactoegame = {

  clickCounter: 0, //record of valid squares played
  turnCounter: 'Player 1', //record of player turn currently
  drawChecker: false, //record of draw
  winner: 'none', //record of winner
  aiPlayer: true, //determines if one player game
  aiPlayerLevel: 'hard', //random assignment of level vs based on best chance.

  gamePlayRecord: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ], //end gamePlayRecord

  //onGoingScoreBoard in use if chosen 'play again'
  scoreBoard: {
    Player1: 0,
    Player2: 0,
  },

  //keep a record of which win combination won
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

  //Keep record of who played where.
  recordOfPlay: function ($squareID) {
    $numberFind = $squareID.charAt(5); //get number of ID from square
    tictactoegame.gamePlayRecord[$numberFind-1] = tictactoegame.turnCounter; //assign player record based on square ID number.
  },

  //check for a draw
  drawCheck: function () {
  if (tictactoegame.clickCounter === 9 &&
    tictactoegame.winner === 'none') {
    tictactoegame.drawChecker = true;
  }}, // end draw check

  turnNotification: function () {
    if(this.winner !== 'none') {
      this.turnCounter = 'Game Over';
    }
    else if(this.turnCounter === 'Player 1') {
      this.turnCounter = 'Player 2';
    }
    else if (this.turnCounter === 'Player 2') {
      this.turnCounter = 'Player 1';
    }
  }, //change turn counter

  //check if there is a winning combination
  gameOverCheckThree: function () {
    if((tictactoegame.gamePlayRecord[0] == tictactoegame.gamePlayRecord[1]) &&
      (tictactoegame.gamePlayRecord[2] == tictactoegame.gamePlayRecord[1]))
      {
      this.winner = tictactoegame.gamePlayRecord[0];
      this.winCriteria[0] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[3] == tictactoegame.gamePlayRecord[4]) &&
      (tictactoegame.gamePlayRecord[4] == tictactoegame.gamePlayRecord[5]))
      {
      this.winner = tictactoegame.gamePlayRecord[3];
      this.winCriteria[1] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[6] == tictactoegame.gamePlayRecord[7]) &&
      (tictactoegame.gamePlayRecord[7] == tictactoegame.gamePlayRecord[8]))
      {
      this.winner = tictactoegame.gamePlayRecord[6];
      this.winCriteria[2] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[0] == tictactoegame.gamePlayRecord[3]) &&
      (tictactoegame.gamePlayRecord[3] == tictactoegame.gamePlayRecord[6]))
      {
      this.winner = tictactoegame.gamePlayRecord[0];
      this.winCriteria[3] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[1] == tictactoegame.gamePlayRecord[4]) &&
      (tictactoegame.gamePlayRecord[1] == tictactoegame.gamePlayRecord[7]))
      {
      this.winner = tictactoegame.gamePlayRecord[1];
      this.winCriteria[4] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[2] == tictactoegame.gamePlayRecord[5]) &&
      (tictactoegame.gamePlayRecord[2] == tictactoegame.gamePlayRecord[8]))
      {
      this.winner = tictactoegame.gamePlayRecord[2];
      this.winCriteria[5] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[0] == tictactoegame.gamePlayRecord[4]) &&
      (tictactoegame.gamePlayRecord[0] == tictactoegame.gamePlayRecord[8]))
      {
      this.winner = tictactoegame.gamePlayRecord[0];
      this.winCriteria[6] ='true';
    } // end if
    if((tictactoegame.gamePlayRecord[2] == tictactoegame.gamePlayRecord[4]) &&
      (tictactoegame.gamePlayRecord[2] == tictactoegame.gamePlayRecord[6]))
      {
      this.winner = tictactoegame.gamePlayRecord[2];
      this.winCriteria[7] ='true';
    } // end if
  },

  //updated score board and set starting player for 'play again' button
  updateScoreAndSetLoserAsStartingPlayer: function () {
    if (this.aiPlayer == true) {
       this.turnCounter = 'Player 1';
    } //end ai if
    else
    {
      if(this.winner === 'Player 1') {
        this.turnCounter = 'Player 2';
      }
      else {
        this.turnCounter = 'Player 1';
      }
    } //end ai else

      if (this.winner === 'Player 1') {
        this.scoreBoard.Player1 = parseInt(this.scoreBoard.Player1) + 1;
      }
      else if (this.winner === 'Player 2') {
        this.scoreBoard.Player2 = parseInt(this.scoreBoard.Player2) + 1;
      }

  },

  aiCalc: function () {
    if (this.aiPlayerLevel == 'hard')
    {
      // hard AI sequence of play -put into gamePlayCSS, DRY up later
      if (tictactoegame.gamePlayRecord[4] === 5) {
        $('#item-5 .player2TokenBoard').css({'visibility': 'visible'},{'transition-duration': '5s'});
        tictactoegame.gamePlayRecord[4] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[0] === 1) {
        $('#item-1 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[0] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[2] === 3) {
        $('#item-3 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[2] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[6] === 7) {
        $('#item-7 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[6] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[8] === 9) {
        $('#item-9 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[8] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[1] === 2) {
        $('#item-2 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[1] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[3] === 4) {
        $('#item-4 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[3] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[5] === 6) {
        $('#item-6 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[5] = 'Player 2';
      }
      else if (tictactoegame.gamePlayRecord[7] === 8) {
        $('#item-8 .player2TokenBoard').css({'visibility': 'visible'});
        tictactoegame.gamePlayRecord[7] = 'Player 2';
      }
    }
  },

}; //end tictactoegame

//----------------------------DOM GAME FUNCTIONALITY---------------------------//

//object to capture game play:
const gamePlayCSS = {

  gameOverCSS: function () {
    if (tictactoegame.winner !== 'none' ) {
      $('#msgDisplay').html(`Game Over! ${tictactoegame.winner} Wins!`);
      $('#playAgain').css({'visibility': 'visible'});
      $('#reset').css({'visibility': 'visible'});
    }
  }, //gameOverCSS

  turnCSS:  function () {
    if (tictactoegame.turnCounter === 'Player 1') {
      $('#player1 .turnNote').html("Your Turn");
      $('#player2 .turnNote').html("");
    } //end if
    else if (tictactoegame.turnCounter === 'Player 2') {
      $('#player2 .turnNote').html("Your Turn");
      $('#player1 .turnNote').html("");
    } // end else

    else if (tictactoegame.turnCounter === 'Game Over') {
      $('.turnNote').html("");
    }
  }, //change the writing that indicates whose turn it is

  resetBoard: function () {
    $('.playSquare').find('img').css({'visibility': 'hidden'});
    $('.playSquare').find('.strike-out').css({'visibility': 'hidden'});
    tictactoegame.winner = "none";
    tictactoegame.drawChecker = false;
    tictactoegame.clickCounter = 0;
    $('#msgDisplay').html("");
    for (let i =0; i < tictactoegame.gamePlayRecord.length; i++) {
      const number = i + 1;
      tictactoegame.gamePlayRecord[i] = number;
      tictactoegame.winCriteria[i] = 'false';
    } //end for
    this.winCriteriaCalc ();
  },//reset the board to play again

  winCriteriaCalc: function() {
    for (let i =0; i < tictactoegame.winCriteria.length; i++) {
      if (tictactoegame.winCriteria[i] === "true") {
        $('#strike-out' + i).css({'visibility': 'visible' });//activate the red line in the right spot based
      } //end if
      else {
        $('#strike-out' + i).css({'visibility': 'hidden' });
      }
    } //end for
  }, //end winCriteriaCalc function

  drawCSS: function () {
    if(tictactoegame.drawChecker == true) {
      $('#msgDisplay').html("It's a draw!");
    }
  }, //publishes draw message

};


//----------------------------CLICK FUNCTIONS---------------------------//

//action on click of board square
$('.playSquare').on("click", function () {
  $('#msgDisplay').html(""); //clear screen message

  //check if game over
  if (tictactoegame.winner !== "none" || tictactoegame.drawChecker == true) {
    $('#msgDisplay').html('The game is over, click below to play again!');
  }

  else if (  //check if square has been played. if so, go to 'else' and display 'msg to pick again.'
    $(this).find('.player1TokenBoard').css('visibility') == 'hidden' &&
    $(this).find('.player2TokenBoard').css('visibility') == 'hidden' )
    {

    tictactoegame.clickCounter += 1;
    //set token to play
    if(tictactoegame.turnCounter === 'Player 1') {
      $(this).find('.player1TokenBoard').css({'visibility': 'visible'});
    } // end if
    else {
      $(this).find('.player2TokenBoard').css({'visibility': 'visible'});
    } //end else

    const $squareID = $(this).attr('id'); //get ID of square
    tictactoegame.recordOfPlay($squareID); //record play
    tictactoegame.gameOverCheckThree(); //check if won, and display win message.
    gamePlayCSS.gameOverCSS(); //display game over message
    gamePlayCSS.winCriteriaCalc(); //check combination won, and activate CSS
    tictactoegame.drawCheck(); //check for a draw
    gamePlayCSS.drawCSS(); //update draw message
    tictactoegame.turnNotification(); // Change player turn & update HTML
    gamePlayCSS.turnCSS(); //alternative 'your turn text on screen'

    //AI turn from here
    if(tictactoegame.aiPlayer == true &&
      tictactoegame.winner === 'none' &&
      tictactoegame.drawChecker == false)
    {

      tictactoegame.aiCalc();
      tictactoegame.clickCounter += 1; //add count to valid turns played
      tictactoegame.gameOverCheckThree(); //check if won, and display win message.
      gamePlayCSS.gameOverCSS(); //display game over message
      gamePlayCSS.winCriteriaCalc(); //check combination won, activate CSS line
      tictactoegame.drawCheck(); //check for a draw
      gamePlayCSS.drawCSS(); //update draw message
      tictactoegame.turnNotification(); // Change player turn & update HTML
      gamePlayCSS.turnCSS(); //alternative 'your turn text on screen'
    }
  } //end if
  else
  { // message to play a different square
    $('#msgDisplay').html("Please choose another square, that one has been played");
  }
}); //.playSquare click

//reset button actions
$('#reset').on("click", function () {
  gamePlayCSS.resetBoard();
  tictactoegame.turnCounter = 'Player 1';
  gamePlayCSS.turnCSS();
  tictactoegame.scoreBoard.Player1 = 0;
  tictactoegame.scoreBoard.Player2 = 0;
  $('#scorePlayer1').html("0");
  $('#scorePlayer2').html("0");
  $('.playerChoicePage').fadeIn();
  $('.playingScreen').fadeOut();
  $('#namePlayer1').val("");
  $('#namePlayer2').val("");
  $('#playAgain').css('visibility', 'hidden');
  $('#reset').css('visibility', 'hidden');
});

//play again button actions
$('#playAgain').on("click", function () {
  tictactoegame.updateScoreAndSetLoserAsStartingPlayer();
  gamePlayCSS.resetBoard();
  gamePlayCSS.turnCSS();
  $('#scorePlayer2').html(tictactoegame.scoreBoard.Player2);
  $('#scorePlayer1').html(tictactoegame.scoreBoard.Player1);
});

//starting button entry page action
$('#start').on("click", function () {
  $('.playingScreen').fadeIn();
  $('.entryPage').fadeOut();
  $('#playerName1').html( $('#namePlayer1').val() );
  $('#playAgain').css('visibility', 'visible');
  $('#reset').css('visibility', 'visible');
  if(tictactoegame.aiPlayer == false) {
    $('#playerName2').html( $('#namePlayer2').val() );
  }
});

//starting button entry page action
$('#onePlayerGame').on("click", function () {
  $('.entryPage').fadeIn();
  $('.playerChoicePage').fadeOut();
  tictactoegame.aiPlayer = true;
  $('#playerName2').html("Computer");
  $('#namePlayer2').hide();
  $('#label2').hide();
});

$('#twoPlayerGame').on("click", function () {
  $('.entryPage').fadeIn();
  $('.playerChoicePage').fadeOut();
  tictactoegame.aiPlayer = false;
  $('#namePlayer2').show();
  $('#label2').show();
});
