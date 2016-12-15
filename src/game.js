import Player from 'player';
import Board from 'board';

var prompt = require('prompt');
prompt.start();

// constructor will start the game
var Game = function(){
  this.gameBoard = new Board();

  var name1 = "Player 1";
  var name2 = "Player 2";
  this.nextPlay = true;

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

  Game.prototype.playerAction = function () {
    // validInput(); // should return the two coordinates, if valid?
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
  };

  // Game.prototype.validInput = function () {
  //   prompt.get('this.loc1', 'this.loc2', function (err, result) {
  //     console.log(':');
  //     console.log('  First coordinate (0, 1 or 2) || ' + result.this.loc1);
  //     console.log('  Second coordinate (0, 1, 2) || ' + result.this.loc2);
  //     if (this.gameBoard.spaces[result.loc1][result.loc2]!=='_') {
  //       validInput();
  //     }
  //   });
  // };

  Game.prototype.status = function () {
    //toggle status
    if(this.match === true){
      endGame();
    }
    if(this.tie === true){
      newGame();
    }
    if(this.nextPlay === true){
        playerAction();
    }
  };

Game.prototype.restart = function(){
  //refresh the board, clear the plays
  this.gameBoard = new Board();
  this.P1 = new Player();
  this.P2 = new Player();
  this.P1.turn = true;

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

Game.prototype.fillName = function () {
  //show players names on the game page
  document.getElementById('name1').innerHTML = this.name1;
  document.getElementById('name2').innerHTML = this.name2;
};

export default Game;
