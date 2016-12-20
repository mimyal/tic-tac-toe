import $ from 'jquery';

import TicTacToe from 'app/models/tic_tac_toe';
import TicTacToeView from 'app/views/tic_tac_toe_view';

$(document).ready(function() {

  var application = new TicTacToe();

  var appView = new TicTacToeView({
    el: '#tic-tac-toe',
    model: application

  });
  appView.render();

});
