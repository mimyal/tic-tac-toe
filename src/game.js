import Player from 'player';
import Board from 'board';

var prompt = require('prompt');
prompt.start();

var Game = function(){
  this.board = new Board();
  // var name1 = "";
  // var name2 = "";
  this.tie = false;
  this.match = false;
  this.nextPlay = true;

  // prompt.get("your name", "your name here");
  // prompt.get(['name1', 'name2'], function (err, result) {
  //   console.log('Command-line input received:');
  //   console.log('  Player 1 || ' + result.name1);
  //   console.log('  Player 2 || ' + result.name2);
  // });
  // if (name1!== null){
    P1 = new Player();
    // P1.name = name1;
    P1.mark = "X";
    document.getElementById("welcome").innerHTML =
    "Hello P1!  You are X's";
    P1.turn = true;

  // }if (name2!== null){
    P2 = new Player();
    // P2.name = name2;
    P2.mark = "O";
    document.getElementById("welcome").innerHTML =
    "Hello P2!  You are O's";
  };
};

  Game.prototype.playerAction = function () {
    // validInput();
    if (P1.turn === true){
      //plays function will wait for the player to play, then
      P1.plays();
      P1.turn = false;
      P2.turn = true;
      gameBoard.spaces[result.this.loc1][result.this.loc2] = P1.mark;
    }
      else if(P2.turn === true){
      P2.turn = false;
      P1.turn = true;
      gameBoard.spaces[result.this.loc1][result.this.loc2] = P2.mark;
    }
  };

  // Game.prototype.validInput = function () {
  //   prompt.get('this.loc1', 'this.loc2', function (err, result) {
  //     console.log(':');
  //     console.log('  First coordinate (0, 1 or 2) || ' + result.this.loc1);
  //     console.log('  Second coordinate (0, 1, 2) || ' + result.this.loc2);
  //     if (gameBoard.spaces[result.loc1][result.loc2]!=='_') {
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
