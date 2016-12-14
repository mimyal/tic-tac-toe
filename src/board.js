import Player from 'player';
// 2D array equivalent of the tic tac toe board
// Contents of this page: logic for the board itself
// needs to map the html portion of board to each button with handlers to trigger events to the player & game
var x = "X";
var o = "O";

var Board = function(){
  this.spaces = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  //create a count of the possible plays by raising the length of the board by the 2nd pow
  this.possiblePlays = Math.pow(this.spaces.length, 2);
};

Board.prototype.plays = function () {
  //keeep track of the number of plays in the game/where they have been, in order to disallow double assignment
  this.plays = [];
  return this.plays;
};

Board.prototype.remaining = function () {
  //exit out of the game once 9 plays have been made
  if(this.possiblePlays === 0){
    this.possiblePlays = Math.pow(this.spaces.length, 2);
  }
};

export default Board;
