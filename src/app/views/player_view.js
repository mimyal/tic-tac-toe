import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import GameView from 'app/views/game_view';

// instanciated by ttt_view
var PlayerView = Backbone.View.extend({
  initialize: function(options){
    this.playerX = options.playerX;
    this.playerO = options.playerO;

    // this.players = {
    //   this.playerX: options.playerX,
    //   this.player0: options.playerO
    // }; //errors

    // this.playerPlays = []; // tracks plays
    // this.score = 0;
    this.template = _.template($('#tmpl-players').html());
  },
  render: function(){
    console.log('Rendering PlayerView');
    // console.log(this.playerO.mark);
    // console.log(this.playerX);
    // NOTE HOW these two players have names called from different places
    // this.playerX.name='Player 1' and this.playerO.attributes.name='Player'
    this.players = {playerX: this.playerX, playerO: this.playerO};
    // console.log(this.players.playerO + '>>>>');
    var html = this.template({playerX: this.playerX, playerO: this.playerO});
    this.$el.html(html);

    // Re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();

    return this;
  }
  //events functions - other logic?





});

//////////////////////
export default PlayerView;
