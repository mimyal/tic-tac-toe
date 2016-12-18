import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  defaults: {
    status: 'game', // other statuses are draw and win, or just 'end'
    turnsLeft: 9

  },
  initialize: function(){
    console.log('Created a new game');
  }

});

export default Game;
