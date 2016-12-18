import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import GameView from 'app/views/game_view';

var PlayerView = Backbone.View.extend({
  initialize: function(){
    this.player = new Player();

    this.playerPlays = []; // tracks plays
    // this.score = 0;

  },

  //render and events functions - other logic?
});


// var PlayerView = function(){
  //every play that has happened deducted here (is this necessary?)
  // this.name = "";
  // this.mark = "";  // x for playerX or o for playerO
  // this.playerOplays = []; // track plays
  // this.score = 0; // winning?
  // this.turns = 0; // how many times have you played
  // this.turn = false; //is it your turn or the other players
//   if(this.turns > 2){
//      if (this.plays.includes [[0][0]], [[0][1]], [[0][2]]){
//      winStatus = true;
//        if (this.plays.includes [[1][0]]){
//        }
//      }
//    }
// };
//
//
// //this could be useful for an automated player later
// Player.prototype.shuffle = function(){
//     for (let i = this.possiblePlays.length; i; i--){
//         let j = Math.floor(Math.random() * i);
//         [this.plays[i - 1], this.possiblePlays[j]] = [this.possiblePlays[j], this.possiblePlays[i - 1]];
//     }
//     console.log(this.possiblePlays);
//     return this.possiblePlays;
// };


// var playerX = new Player();
// var playerO = new Player();


//////////////////////
export default PlayerView;
