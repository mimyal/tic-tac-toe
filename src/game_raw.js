import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from 'board_raw';
import Player from 'player_raw';

var Game = function(){
  // ====== BOARD ======
  this.board = new Board();
  this.stateOfBoard = this.board.tiles; // the current state of the board

  // ===== PLAYERS =======
  this.playerX = new Player();
  this.playerX.name = 'Player 1';
  this.playerX.mark = 'X';
  this.playerX.turn = true;

  this.playerO = new Player();
  this.playerO.name = 'Player 2';
  this.playerO.mark = 'O';

  // ===== INITIALIZATIONS =====
  this.startingPlayer = this.playerX;
  this.currentPlayer = this.playerX;
  // this.status = 'game'; // other statuses are draw and win, or just 'end'
  // this.turnsLeft = 9;

  // ====== START SETTING UP FOR PUTTING THE VIEW TOGETHER =====
  // listElements etc

};


_.extend(Game.prototype, {
  //other things than can cause an invalid input, but not covered here
  validInput: function () {
    if (this.stateOfBoard[this.locX][this.locY]!=='_')   {
      return false;
    } else {
      return true;
    }
  },

  checkStatus: function(){
    console.log('WIN? DRAW? CONTINUE?');

    // early on in the game there is no need to loop through anything
    if (this.turnsLeft >= 7) { // first (9) and second (8) turns no winner is declared
      return true;
    }

    //check for winner
    if (this.matchWon()) {
      this.status = 'win';
      this.winner = this.currentPlayer;
      //   //endWithWinner // fancy popup
      return false;
    }

    // if no winner check for draw
    if (this.turnsLeft === 0) {
      this.status = 'draw';
      //endWithDraw // fancy popup
      return false;
    }
    if (this.status == 'game') {
      return true;
    }
  },

  restartGame: function(){
    //refresh the board, clear the plays, switch starting player
    console.log('New starting player!');
    this.board = new Board();
    this.stateOfBoard = this.board.tiles;

    if (this.startingPlayer == this.playerX) {
      this.playerX.turn = false;
      this.playerO.turn = true;
      this.startingPlayer = this.playerO;
      this.currentPlayer = this.playerO;
      console.log('Player 2!');
    } else {
      this.playerO.turn = false;
      this.playerX.turn = true;
      this.startingPlayer = this.playerX;
      this.currentPlayer = this.playerX;
      console.log('Player 1');
    }
    this.status = 'game'; // other statuses are draw and win, or just 'end'
    this.turnsLeft = 9;

  },

  // fancy popup view here
  endWithWinner: function(){
    this.currentPlayer.score +=1;
    // winningScreen(this.currentPlayer);
    console.log(this.currentPlayer + 'WON THE GAME!');

    stopPropagation(); // make sure popup window has a restart game option
  },

  // fancy popup view here
  endWithDraw: function(){
    console.log('The game is a tie. Nobody won.');
    stopPropagation(); // make sure popup window has a restart game option
  },

  exitGame: function () {
    //refresh the players, refresh board refresh game
  },

  playerAction: function () {
    if (this.validInput()) {
      this.turnsLeft -= 1;
      if (this.playerX.turn === true){
        this.stateOfBoard[this.locX][this.locY] = this.playerX.mark;
        this.checkStatus(); // should end game appropriately if win/draw - otherwise return here
        this.playerX.turn = false;
        this.playerO.turn = true;
        this.currentPlayer = this.playerO;
      }
      else if(this.playerO.turn === true){
        this.stateOfBoard[this.locX][this.locY] = this.playerO.mark;
        this.checkStatus();
        this.playerO.turn = false;
        this.playerX.turn = true;
        this.currentPlayer = this.playerX;
      }
    } else {
      return console.error('invalid input from player');
    }
  },

  matchWon: function() {
    var winStatus;
    // console.log('Checking for a winning board');
    var currentBoard = this.stateOfBoard;

    var position = this.locX + 3*this.locY;
    var potentialMatchWinners = this.board.winningBoards[position];
    // for example: [ [[0,0], [0,1], [0,2]], [[0,1], [1,1], [2,1]] ]

    for (var i = 0; i < potentialMatchWinners.length; i++) {
      winStatus = true;
      for (var j = 0; j < 3; j++) {
        var winningSequence = potentialMatchWinners[i];
        var locX = winningSequence[j][0];
        var locY = winningSequence[j][1];
        // currentBoard[locX] example ['_', 'X', 'O']
        if (currentBoard[locX][locY] != this.currentPlayer.mark) {
          winStatus = false;
        }
      }
    } // first for-loop
    return winStatus;
  }

});





// Game.prototype.checkStatus = function () {
//   if (this.currentHash === {}) {
//     for (var i = 0; i < this.gameBoard.tiles.length; i++) {
//       for (var j = 0; j < this.gameBoard.tiles[i].length; j++) {
//         currentHash[i.toString() + j.toString()] = this.gameBoard.tiles[i][j];
//       }
//     }
//   } else {
//     // currentHash[this.locX + this.locY] // we don't have a current player
//   }

// a winning array 0, 1, 2, might have been played 2, 0, 1 - so we should use a hash

// switch(this.gameBoard.tiles) {
//   case []:
//   case []: // two options
//       // tie
//       //code block
//       break;
//   case n:
//       // winner
//       // code block
//       break;
//   default:
//       //continue game
// }

// //toggle status
// if(this.match === true){
//   endGame();
// }
// if(this.tie === true){
//   newGame();
// }
// if(this.nextPlay === true){
//     playerAction();
// }
// };

// Game.prototype.fillName = function () {
//   //show players names on the game page
//   document.getElementById('name1').innerHTML = this.name1;
//   document.getElementById('name2').innerHTML = this.name2;
// };


// binaryPosition: function(){
//   switch ([this.locX, this.locY]) {
//     case [0,0]:
//       this.currentPosition = 0;
//       break;
//     case [0,1]:
//       this.currentPosition = 2;
//       break;
//     case [0,2]:
//       this.currentPosition = 4;
//       break;
//     case [1,0]:
//       this.currentPosition = 6;
//       break;
//     case [1,1]:
//       this.currentPosition = 8;
//       break;
//     case [1,2]:
//       this.currentPosition = 10;
//       break;
//     case [2,0]:
//       this.currentPosition = 12;
//       break;
//     case [2,1]:
//       this.currentPosition = 14;
//       break;
//     case [2,2]:
//       this.currentPosition = 16;
//       break;
//
//     default:
//
//   }
// },


// ========================

export default Game;
