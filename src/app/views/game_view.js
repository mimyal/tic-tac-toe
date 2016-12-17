import Player from 'player';
import Board from 'board';

// var prompt = require('prompt');
// prompt.start();

// constructor will start the game
var Game = function(){
  this.gameBoard = new Board();

  var name1 = "Player 1";
  var name2 = "Player 2";

  this.nextPlay = true;
  this.currentHash = {};

  if (name1!== null){
    this.P1 = new Player();
    this.P1.name = name1;
    this.P1.mark = "X";
    this.P1.turn = true;
    // document.getElementById("welcome").innerHTML =
    // "Hello " + name1 + "! You are X's";
  }
  if (name2!== null){
    this.P2 = new Player();
    this.P2.name = name2;
    this.P2.mark = "O";
    // this.P2.turn = false;
    // document.getElementById("welcome").innerHTML =
    // "Hello " + name2 + "! You are O's";
  }
};

Game.prototype.validInput = function () { //other things than a location already used can cause an invalid input, but not covered yet
  if (this.gameBoard.spaces[this.loc1][this.loc2]!=='_')   { return false;
    // validInput(); // earlier we were prompting for input here this made sense
  } else {
    return true;
  }
};

  Game.prototype.playerAction = function () {
    if (this.validInput()) {
      if (this.P1.turn === true){
        this.P1.turn = false;
        this.P2.turn = true;
        this.gameBoard.spaces[this.loc1][this.loc2] = this.P1.mark;

      }
        else if(this.P2.turn === true){
        this.P2.turn = false;
        this.P1.turn = true;
        this.gameBoard.spaces[this.loc1][this.loc2] = this.P2.mark;
      }
      // checkStatus();
    } else {
        return console.error('invalid input from player');
    }
  };

  Game.prototype.restart = function(){
  //refresh the board, clear the plays
  this.gameBoard = new Board();

  this.currentHash = {};
  this.P1.turn = true;
  this.P2.turn = false;

  this.P1.mark = "X";
  this.P2.mark = "O";
};

Game.prototype.endGame = function(){
  //add to this for deciding if the game has been won
  if (this.plays.includes()){
    this.matchWin = true;
  }
};

Game.prototype.exit = function () {
  //refresh the players, refresh board refresh game
};

// Game.prototype.checkStatus = function () {
//   if (this.currentHash === {}) {
//     for (var i = 0; i < this.gameBoard.spaces.length; i++) {
//       for (var j = 0; j < this.gameBoard.spaces[i].length; j++) {
//         currentHash[i.toString() + j.toString()] = this.gameBoard.spaces[i][j];
//       }
//     }
//   } else {
//     // currentHash[this.loc1 + this.loc2] // we don't have a current player
//   }

  // a winning array 0, 1, 2, might have been played 2, 0, 1 - so we should use a hash

  // switch(this.gameBoard.spaces) {
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

Game.prototype.fillName = function () {
  //show players names on the game page
  document.getElementById('name1').innerHTML = this.name1;
  document.getElementById('name2').innerHTML = this.name2;
};

export default Game;
