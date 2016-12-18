// This is the application view ruled by el #tic-tac-toe
import Backbone from 'backbone';
import GameView from 'app/views/game_view';

import Game from 'app/models/game';
import Player from 'app/models/player';

const TicTacToeView = Backbone.View.extend({ //parent
  initialize: function() {

    //initialize the instance of the Game model here

    //listElements etc


    //initialize the instance of GameView here

    // this.contactGrid = new ContactListView( { //child
    //   el: listElement,
    //   model: this.contactCollection
    // });

        // GameView will initialize Board and Player


        // WHAT ARE YOU LISTENING TO?

    this.render();
  },

  render: function() {
    return this;
  }
});

export default TicTacToeView;
