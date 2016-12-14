import Player from 'player';
import Board from 'board';

var Game = function(){
  this.nextPlay = true;
  this.name1 = prompt("Please enter your name", "<name goes here>");
  if (customerName!== null){
    document.getElementById("welcome").innerHTML =
    "Hello " + this.name1 + "! How are you today?";
  }
};
  this.name2 = prompt("Please enter your name", "<name goes here>");
  if (customerName!== null){
    document.getElementById("welcome").innerHTML =
    "Hello " + this.name2 + "! How are you today?";
  }

  Game.prototype.status = function () {
    if(this.match === true){
      endGame();
    }
    if(this.tie === true){
      newGame();
    }
    if(this.nextPlay === true){
        xO();
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
