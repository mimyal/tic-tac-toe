import Player from 'player';
// needs to map the html portion of board to each button with handlers to trigger events to the player & game

var Board = function(){
  //not sure if this is really necessary, but I'll keep it in for now
  this.spaces = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
  ];
  //could create a formula to push "_" num times of an edge to account for n length board
  this.reset = Math.pow(this.spaces.length, 2);
  this.possiblePlays = this.reset;
  //create a count of the possible plays by raising the length of the board by the 2nd pow
};

Board.prototype.plays = function () {
  //keeep track of the plays in the game/where they have been, in order to disallow double assignment
  this.plays = [];
  return this.plays;
};

Board.prototype.remaining = function () {
  //exit out of the game once 9 plays have been made
  if(this.possiblePlays === 0){
    this.possiblePlays = this.reset;
  }
  return this.possiblePlays;
};

export default Board;
