import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from 'app/models/board';
import Player from 'app/models/player';

import PlayerView from 'app/views/player_view';

var GameView = Backbone.View.extend({
  initialize: function(){
// ====== BOARD ======
    this.board = new Board();
    this.currentGrid = this.currentBoard.tiles;
    this.currentBoard = this.board.binaryBoardRepresentation;

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
    // this.status = 'game'; // other statuses are draw and win, or just 'end'
    // this.turnsLeft = 9;
  },

  //other things than can cause an invalid input, but not covered here
  validInput: function () {
    if (this.currentGrid[this.locX][this.locY]!=='_')   {
      return false;
    } else {
      return true;
    }
  },

  /* Assuming the board is represented by bits where each square is two bits to allow
  the representation of 4 states (only 3 are needed).
  Params: oldBoard = the previous state of the board (represented as a single 18 bit number)
          this.locX, this.locY = The X and Y locations of the square to be set (between 0 and 2 inclusively)
          state = The new state to set the square (between 0 and 3 inclusively) 0b11
  */
  setBoardSquare: function (state) {
    if (!validInput()) {
      return console.log('Not a valid input, hopefully the game can deal with it');
    }
    var oldBoard = this.currentBoard;
    // Calculate the nuber of bits to shift for the this.locX,this.locY position
    var position = (this.locX + (this.locY * 3)) * 2;
    this.position = position;

    // Zero out the existing bits in case we are overwriting a pre-existing non-zero state
    var newBoard = oldBoard & (~(0b11 << position));

    // Set new state by shifting bits into the correct location and applying an OR
    newBoard |= state << position; // 0b11 << position

    this.currentBoard = newBoard;
  },

// returns the current square value to use in checkWinner/checkStatus
  getBoardSquare: function () {
    // var position = (this.locX + (this.locY * 3)) * 2;
    // this.position = position;
    var shiftedState = this.currentBoard & (0b11 << this.position); // non-inverted bit mask, wipes out all but xy (...0000xy0000...)
    return shiftedState >> this.position; //...00000xy, ie 00, 01, 10
  },

  playerAction: function () {
    if (this.validInput()) {
      this.turnsLeft -= 1;
      if (this.playerX.turn === true){
        this.currentGrid[this.locX][this.locY] = this.playerX.mark;
        checkStatus(); // should end game appropriately if win/draw - otherwise return here
          this.playerX.turn = false;
          this.playerO.turn = true;
      }
        else if(this.playerO.turn === true){
        this.currentGrid[this.locX][this.locY] = this.playerO.mark;
        checkStatus();
        this.playerO.turn = false;
        this.playerX.turn = true;
      }
    } else {
        return console.error('invalid input from player');
    }
  },

  matchWon: function(state) {
    console.log('Checking for a winning board');

    // change the binary on the board, the this.currentBoard
    setBoardSquare(state);

    // now compare it with the winningBoard collection
    for (var i = 0; i < this.board.winnningBoards[this.position].length; i++) {
      var winnerBoard = this.board.winnningBoard[this.position][i];
      if (winnerBoard === this.currentBoard) {
        return true;
      }
    }
    return false;
  },

  checkStatus: function(){
    console.log('WIN? DRAW? CONTINUE?');
    var state = 0;
    if (this.playerX.turn === true) {
      state = 0b01;
      this.currentPlayer = this.playerX;
    } else { // playerO has a turn
      state = 0b10;
      this.currentPlayer = this.playerO;
    }

    //check for winner
    if (matchWon(state)) {
      this.winner = this.currentPlayer;
      //   this.status = 'win';
      //   //endWithWinner // fancy popup
    }

    // if no winner check for draw
    if (this.turnsLeft === 0) {
      this.status = 'draw';
      //endWithDraw // fancy popup
    }
    if (this.status == 'game') {
      return true;
    }
  },

  restartGame: function(){
    //refresh the board, clear the plays, switch starting player
    console.log('New starting player!');
    this.currentBoard = new Board();
    this.currentGrid = this.currentBoard.tiles;

    if (this.startingPlayer == this.playerX) {
      this.playerX.turn = false;
      this.playerO.turn = true;
      console.log('Player 2!');
    } else {
      this.playerO.turn = false;
      this.playerX.turn = true;
      console.log('Player 1');
    }
    // this.playerX.mark = "X";
    // this.playerO.mark = "O";
    this.status = 'game'; // other statuses are draw and win, or just 'end'
    this.turnsLeft = 9;

  },

  endWithWinner: function(){
    //add to this for deciding if the game has been won
    if (this.playerX.turn === true) {
      this.playerX.score +=1;
      winningScreen(this.playerX);
    } else if (this.playerO.turn === true) {
      this.playerX.score +=1;
      winningScreen(this.playerO);
      }
  },

  endWithDraw: function(){
    console.log('The game is a tie. Nobody won.');
    stopPropagation();
  },

  winningScreen: function(player) {
    console.log(player + 'WON THE GAME!');
    stopPropagation();
  },

  exitGame: function () {
    //refresh the players, refresh board refresh game
  },

  fillName: function () {
    //show players names on the game page
    document.getElementById('this.playerX.name').innerHTML = this.name1;
    document.getElementById('this.playerO.name').innerHTML = this.name2;
  }

  //other backbone functions here
  //render etc

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

export default GameView;
