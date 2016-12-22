import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'app/models/player';

const Game = Backbone.Model.extend({
  defaults: {
    status: 'game', // other statuses are draw and win, or just 'end'
    turnsLeft: 9

  },
  initialize: function(){
    // ====== BOARD ======
    this.board = new Board();
    this.stateOfBoard = this.board.attributes.tiles; // the current state of the board

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
    this.currentPlayer = this.playerX;
    // this.status = 'game'; // other statuses are draw and win, or just 'end'
    // this.turnsLeft = 9;
  },
  //other things than can cause an invalid input, but not covered here
  validInput: function () {
    console.log('ValidInput');
    console.log(this.board.attributes.tiles);
    if (this.board.attributes.tiles[this.board.attributes.locX][this.board.attributes.locY]!=='_')   {
      return false;
    } else {
      return true;
    }
  },
  // console.log('WIN? DRAW? CONTINUE?');
  checkStatus: function(){

    // early on in the game there is no need to loop through anything
    if (this.turnsLeft >= 7) { // first (9) and second (8) turns no winner is declared
      return true;
    }
    console.log('checking status');
    //check for winner
    this.matchWon();
    if (this.status == 'win') {
      this.winner = this.currentPlayer;
      //   //endWithWinner // fancy popup
      console.log(this.winner.name + ': Match Won!');
      return false; // as in dont continue playing
    }

    // if no winner check for draw
    if (this.turnsLeft === 0) {
      this.status = 'draw';
      //endWithDraw // fancy popup
      return false;
    }
    if (this.status == 'game') {
      console.log('Continue the game');
      return true;
    }
  },

  restartGame: function(){
    //refresh the board, clear the plays, switch starting player
    console.log('New starting player!');
    this.board.destroy(); // does not change the DOM
    // debugger
    this.board = new Board( { //hardwire fix for the weirdness that's happening to tiles otherwise
      tiles: [
      ['_','_','_'],
      ['_','_','_'],
      ['_','_','_']
      ]
    });
    this.turnsLeft = 9;
    this.status = 'game'
    this.winner = null;
    console.log('Now this' + this.board.get('tiles'));
    // console.log('what is this board' + JSON.stringify(this.board));
    this.stateOfBoard = this.board.attributes.tiles;
    console.log('Lets look at those tiles');
    console.log(this.board.get('tiles'));
    // console.log(this);

    if (this.startingPlayer == this.playerX) {
      this.playerX.turn = false;
      this.playerO.turn = true;
      this.startingPlayer = this.playerO;
      this.currentPlayer = this.playerO;
      console.log('Player 2!');
    } else {
      this.playerO.turn = false;
      this.playerX.turn = true;
      this.startingPlayer = this.playerX;
      this.currentPlayer = this.playerX;
      console.log('Player 1');
    }
    this.status = 'game'; // other statuses are draw and win, or just 'end'
    this.turnsLeft = 9;

  },

  playerAction: function () {
    this.status = 'game';
    console.log('PlayerAction!');
    if (this.validInput()) {
      this.turnsLeft -= 1;
      var currentTiles = this.board.get('tiles');
      if (this.playerX.turn === true){
          currentTiles[this.board.attributes.locX][this.board.attributes.locY] = this.playerX.mark;
          this.board.set({tiles: currentTiles});

          // this.board.attributes.tiles[this.board.attributes.locX][this.board.attributes.locY] = (this.playerX.mark);
          this.checkStatus(); // should end game appropriately if win/draw - otherwise return here
          this.playerX.turn = false;
          this.playerO.turn = true;
          this.currentPlayer = this.playerO;
      } else if(this.playerO.turn === true){
          // console.log('playerO turn');
          currentTiles[this.board.attributes.locX][this.board.attributes.locY] = this.playerO.mark;
          this.board.set({tiles: currentTiles});

          // this.board.attributes.tiles[this.board.attributes.locX][this.board.attributes.locY] = this.playerO.mark;
          this.checkStatus();
          this.playerO.turn = false;
          this.playerX.turn = true;
          this.currentPlayer = this.playerX;
      }
    } else {
      return console.error('Invalid input from player'); // pops up second time board is run
    }
    this.trigger('player-action');
  },

  matchWon: function() {
    console.log('EVERYONE is a WINNER!');
    var winCheck;
    console.log('Checking for a winning board');
    // console.log(this.board);
    // this.currentBoard = this.stateOfBoard; // this.board.attributes.tiles

    // calculate to know where in the winning hash to look for the winner
    var position = this.board.attributes.locX + 3*this.board.attributes.locY;
    var potentialMatchWinners = this.board.attributes.winningBoards[position];
    // for example: { 0: [ [[0,0], [0,1], [0,2]], [[0,1], [1,1], [2,1]] ] }

    potentialMatchWinners.forEach(function(winningLine) {
      winCheck = 0;
      // debugger // this was undefined because the end } , this) was not specified
      // winningLine.forEach(function(tile) {
      //   var winX = tile[0];
      //   var winY = tile[1];
      //   var test = this.currentPlayer.mark;
      //   var test2 = this.stateOfBoard[winX][winY];
      //     if (this.stateOfBoard[winX][winY] == this.currentPlayer.mark) {
      //       winCheck += 1;
      //       console.log(winCheck);
      //       debugger
      //       console.log('winning once / twice / third times a winner');
      //     } //endif
      // }, this); // end inner each
      for (var i = 0; i < 3; i++) {
        var winX = winningLine[i][0];
        var winY = winningLine[i][1];
        var test = this.currentPlayer.mark;
        var test2 = this.stateOfBoard[winX][winY];
        if (this.stateOfBoard[winX][winY] == this.currentPlayer.mark) {
          winCheck += 1;
          console.log(winCheck);
          // debugger
          console.log('winning once / twice / third times a winner');
        } //endif
      }
      if (winCheck==3) {
        this.status = 'win';
        return true;
      }

    }, this); //end outer each
    return false;
  }

  //// SPACE FOR OTHER FUNCTIONS

});

export default Game;
