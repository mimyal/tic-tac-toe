// This is the application view ruled by el #tic-tac-toe
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import GameView from 'app/views/game_view';
import PlayerView from 'app/views/player_view';
import Game from 'app/models/game';
// import Player from 'app/models/player';

const TicTacToeView = Backbone.View.extend({ //parent
  initialize: function(options) {
    console.log('Initializing TTT VIEW');
    //initialize the instance of the Game model here, or in GameView?
    this.gameModel = new Game(options.model);
    // console.log('gameModel: ' + JSON.stringify(this.gameModel));
    //gameElements etc
    var gameElement = $('#game');

    //initialize the instance of GameView here
    this.game = new GameView( { // child
      // tagName: 'div',
      // id: 'game',
      // class: 'game-board'
      el: gameElement,
      model: this.gameModel
    });
    // console.log(this.game.el);
    this.game.render(); //render here!

    // GameView should instancialize the Board

    var playersElement = $('players-view');

    this.playerView = new PlayerView( { //child
      el: playersElement,
      playerX: this.gameModel.playerX,
      playerO: this.gameModel.playerO
    });
    this.playerView.render();
    console.log('render player view in tttv');

        // WHAT ARE YOU LISTENING TO?
          //exit game events
          //hide board//kill board

    this.render(); // render here or in app.js??
  },

  render: function() {
    return this;
  }
});

export default TicTacToeView;
