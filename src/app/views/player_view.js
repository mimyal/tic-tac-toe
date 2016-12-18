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

//////////////////////
export default PlayerView;
