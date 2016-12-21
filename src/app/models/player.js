import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults: {
    score: 0,
    name: 'Player',
    turn: false
  },
  initialize: function(){
    console.log('Created a new player');
    // console.log('Created a player with name ' + this.get('name'));
  }

});

export default Player;
