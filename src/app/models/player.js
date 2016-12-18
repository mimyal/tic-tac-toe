import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults: {
    name: 'Player',
    // score: 0,
    turn: false
  },
  initialize: function(){
    console.log('Created a player with name ' + this.get('name'));
  }

});

export default Player;
