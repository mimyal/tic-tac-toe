import Player from 'player';
import Board from 'board';

var Game = function(){
  this.nextPlay = true;
  this.name1 = window.prompt("Please enter your name", "your name here");
  if (customerName!== null){
    P1 = new Player();
    P1.name = this.name1;
    P1.mark = "X";
    document.getElementById("welcome").innerHTML =
    "Hello " + this.name1 + "!";
    P1.turn = true;
  }
};
  this.name2 = window.prompt("Please enter your name", 'your name here');
  if (customerName!== null){
    P2 = new Player();
    P2.name = this.name2;
    P2.mark = "O";
    document.getElementById("welcome").innerHTML =
    "Hello " + this.name2 + "!";
  }

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
