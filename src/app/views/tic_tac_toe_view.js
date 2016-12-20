// This is the application view ruled by el #tic-tac-toe
import Backbone from 'backbone';
import $ from 'jquery';

import GameView from 'app/views/game_view';
import Game from 'app/models/game';
import Player from 'app/models/player';

const TicTacToeView = Backbone.View.extend({ //parent
  initialize: function(options) {

    //initialize the instance of the Game model here, or in GameView?
    this.gameModel = new Game(options.model);

    //gameElements etc
    var gameElement = $('#game');

    //initialize the instance of GameView here
    this.game = new GameView( { // child
      el: gameElement,
      model: this.gameModel
    });
    this.game.render();

    // GameView should instancialize the Board

    var playersElement = $('players-view');

    this.playerView = PlayerView( { //child
      el: playersElement,
      playerX: this.gameModel.playerX,
      playerO: this.gameModel.playerO
    });

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
