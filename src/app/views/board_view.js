import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import PlayerView from 'player_view';
// // needs to map the html portion of board to each button with handlers to trigger events to the player & game
var BoardView = Backbone.View.extend({

//initialize and other functions, like render and events
  initialize: function(){
    this.board = new Board(); // unless having it in game is enough?

  // // pairing code, not sure where it fits in yet:
  // //could create a formula to push "_" num times of an edge to account for n length board
  // this.reset = Math.pow(this.tiles.length, 2);
  // this.possiblePlays = this.reset;
  // //create a count of the possible plays by raising the length of the board by the 2nd pow

    //keeep track of the plays in the game/where they have been, in order to disallow double assignment
    this.plays = [];

  },

  // write render and events and other functions here


  remaining: function () {
    //exit out of the game once 9 plays have been made
    if(this.possiblePlays === 0){
      this.possiblePlays = this.reset;
    }
    return this.possiblePlays;
  }




});




export default BoardView;
