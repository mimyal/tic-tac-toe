import Player from 'player';
// 2D array equivalent of the tic tac toe board
// Contents of this page: logic for the board itself
// needs to map the html portion of board to each button with handlers to trigger events to the player & game
var Board = function(){
this.spaces = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8]
];
// this.listenTo(this.model, 'click', Player.winMatch);
// this.listenTo(this.model, 'startOver', this.startOver);
};

Board.prototype.clear = function () {

};


export default Board;

// b = new Board();
// b.this.spaces();
