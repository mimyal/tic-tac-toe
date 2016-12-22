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

    this.stateOfBoard = stateOfBoard2D.reduce(function(a, b) { // finally making it an 1d array again
      return a.concat(b);
    }, []);
    // console.log(this.stateOfBoard);

    // this.listenTo(this.model.board, 'board-tiles', this.assessMove);
    this.listenTo(this.model.board, 'destroy', this.canyouhearme);

  },
  canyouhearme: function() {
    console.log('hey hey');
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
    'click .board-btn': 'showBoard',
    'click .reset-btn' : 'resetGame',
    'click #tile-0' : 'assessMove0',
    'click #tile-1' : 'assessMove1',
    'click #tile-2' : 'assessMove2',
    'click #tile-3' : 'assessMove3',
    'click #tile-4' : 'assessMove4',
    'click #tile-5' : 'assessMove5',
    'click #tile-6' : 'assessMove6',
    'click #tile-7' : 'assessMove7',
    'click #tile-8' : 'assessMove8'
  },

  assessMove: function(){
    console.log('GO THROUGH THE LAST MOVE FOR ' + this.model.board.attributes.locX + ' ' + this.model.board.attributes.locY + ' TO CHECK NEW STATUS');
    this.model.playerAction({locX: this.model.board.attributes.locX, locY: this.model.board.attributes.locY});

  },


  assessMove0: function(){
    this.model.board.set({locX: 0}); this.model.board.set({locY: 0});this.assessMove();
    document.getElementById('tile-0').disabled = true;
  },
  assessMove1: function(){
    this.model.board.set({locX: 0}); this.model.board.set({locY: 1});this.assessMove();
    document.getElementById('tile-1').disabled = true;
  },
  assessMove2: function(){
    this.model.board.set({locX: 0}); this.model.board.set({locY: 2});this.assessMove();
    document.getElementById('tile-2').disabled = true;
  },
  assessMove3: function(){
    this.model.board.set({locX: 1}); this.model.board.set({locY: 0});this.assessMove();
    document.getElementById('tile-3').disabled = true;
  },
  assessMove4: function(){
    this.model.board.set({locX: 1}); this.model.board.set({locY: 1});this.assessMove();
    document.getElementById('tile-4').disabled = true;
  },
  assessMove5: function(){
    this.model.board.set({locX: 1}); this.model.board.set({locY: 2});this.assessMove();
    document.getElementById('tile-5').disabled = true;
  },
  assessMove6: function(){
    this.model.board.set({locX: 2}); this.model.board.set({locY: 0});this.assessMove();
    document.getElementById('tile-6').disabled = true;
  },
  assessMove7: function(){
    this.model.board.set({locX: 2}); this.model.board.set({locY: 1});this.assessMove();
    document.getElementById('tile-7').disabled = true;
  },
  assessMove8: function(){
    this.model.board.set({locX: 2}); this.model.board.set({locY: 2});this.assessMove();
    document.getElementById('tile-8').disabled = true;
  },

  resetGame: function(){
    console.log('Resetting');
    this.model.restartGame();
    $('#board').hide();
  },

  showBoard: function(contact) {
  $('#board').empty();
  var template = _.template($('#tmpl-board').html());
  // this.$el.append(contact.$el);
  var board_details = [];
  var counter=0;
  var sign = '';
  this.stateOfBoard.forEach(function(value){
    // if (value==1) {
    if (value=='_') {
      sign = 'HERE IS MY SIGN'; // will be blank later
    // } else if (value ==7) {
    } else if (value =='X') {
      sign = 'X';
    // } else if (value==5) {
    } else if (value=='O') {
      sign = 'O';
    }
    board_details = {sign: sign, counter: counter};
    var html = template(board_details);
    // console.log(html);

    $('#board').append(html);
    counter +=1;
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
