// This is the application view ruled by el #tic-tac-toe
import Backbone from 'backbone';

const TicTacToeView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});

export default TicTacToeView;
