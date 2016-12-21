import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from 'app/models/board';
import Player from 'app/models/player';

import PlayerView from 'app/views/player_view';
import BoardView from 'app/views/board_view';

// instanciated by ttt_view
var GameView = Backbone.View.extend({
  initialize: function(options){
    this.model = options.model;

    this.template = _.template($('#tmpl-game').html());

  },
  render: function() {
    console.log('Rendering GameView');
    console.log(this.model.attributes); //'browsable' object
    console.log(this.model.playerO); //'browsable' object
    // var status = this.model.attributes.status;
    // var html2 = '<h1>' + 'GAME STATUS ' + this.model.attributes.status + '</h1>';
    var html = this.template(this.model);
    this.$el.html(html);
    //
    //     // Re-attach DOM event listeners to our brand-spankin-new HTML
    //     this.delegateEvents();
    //
    //     return this;
  },
  //other backbone functions here:
  //events etc

  fillName: function () {
    //show players names on the game page
    document.getElementById('this.playerX.name').innerHTML = this.name1;
    document.getElementById('this.playerO.name').innerHTML = this.name2;
  },
  // fancy popup view here
  endWithWinner: function(){
    this.currentPlayer.score +=1;
    // winningScreen(this.currentPlayer);
    console.log(this.currentPlayer + 'WON THE GAME!');

    stopPropagation(); // make sure popup window has a restart game option
  },

  // fancy popup view here
  endWithDraw: function(){
    console.log('The game is a tie. Nobody won.');
    stopPropagation(); // make sure popup window has a restart game option
  },

  exitGame: function () {
    //refresh the players, refresh board refresh game
  }

});


// ========================

export default GameView;
