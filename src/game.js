import Player from 'player';
import Board from 'board';

var prompt = require('prompt');
prompt.start();

var Game = function(){
  var name1 = "";
  var name2 = "";
  this.nextPlay = true;
  prompt.get("your name", "your name here");
  prompt.get(['name1', 'name2'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  Player 1 || ' + result.name1);
    console.log('  Player 2 || ' + result.name2);
  });
  if (name1!== null){
    P1 = new Player();
    P1.name = name1;
    P1.mark = "X";
    document.getElementById("welcome").innerHTML =
    "Hello " + name1 + "! You are X's";
    P1.turn = true;
  }
  if (name2!== null){
    P2 = new Player();
    P2.name = name2;
    P2.mark = "O";
    document.getElementById("welcome").innerHTML =
    "Hello " + name2 + "! You are O's";
  }
};

  Game.prototype.playerAction = function () {
    if (P1.turn === true){
      P1.plays();
      P1.turn = false;
      P2.turn = true;
    }
      else if(P2.turn === true){
      P2.plays();
      P2.turn = false;
      P1.turn = true;
    }
  };

  Game.prototype.status = function () {
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
  document.getElementById('name1').innerHTML = this.name1;
  document.getElementById('name2').innerHTML = this.name2;
};

export default Game;
