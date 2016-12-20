import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import GameView from 'app/views/game_view';

// instanciated by ttt_view
var PlayerView = Backbone.View.extend({
  initialize: function(options){
    this.playerX = options.playerX;
    this.playerO = options.playerO;

    // this.playerPlays = []; // tracks plays
    // this.score = 0;
    this.template = _.template($('#tmpl-players').html());

  },
  render: function(){
    console.log('Rendering PlayerView');
    var players = {playerX: this.model.attributes.playerX, playerO: this.model.attributes.playerO};
    var html = this.template(players); //instance of Contact
    this.$el.html(html);

    // Re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();

    return this;
  }
  //render and events functions - other logic?





});

//////////////////////
export default PlayerView;
