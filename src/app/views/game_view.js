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

    $('#board').hide();

    var stateOfBoard2D = this.model.board.attributes.tiles;

    this.stateOfBoard = stateOfBoard2D.reduce(function(a, b) { // finally making it a 1d array again
      return a.concat(b);
    }, []);
    // console.log(this.stateOfBoard);

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
  //events etc to show board
  events: {
    'click .board-btn': 'showBoard'
  },

  showBoard: function(contact) {
  $('#board').empty();
  var template = _.template($('#tmpl-board').html());
  // this.$el.append(contact.$el);
  var board_details = [];
  window.sign = '';
  this.stateOfBoard.forEach(function(value){
    if (value==1) {
      window.sign = 'HERE IS MY SIGN'; // will be blank later
    } else if (value ==3) {
      window.sign = 'X';
    } else if (value==5) {
      window.sign = 'O';
    }
    board_details = "<li>" + window.sign + '</li>';
    var html = template(board_details);
    console.log(html);

    $('#board').append(html);
  });

  console.log('show the board');
  $('#board').show();
},



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
