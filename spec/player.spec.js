import Player from 'app/views/player_view';

describe('TicTacToe', function() {
  var testPlayer = new PlayerView();

  describe('Player', function() {
    //it should construct the player with the required variables
    it('should construct the player with the required variables', function() {
      // player needs a marker
      //player needs a status to know if it is their turn or not
    });

  // describe('plays', function() {
    // it('should pick a board tile from tiles that is not not yet played', function() {
    //   var testBoardtiles = [[1,2,3],[4,5,6],[7,8,9]];
    //   // here the player knows what options are available
    //   // another prompt, how to test that? cant test that
    //   // return the character from the prompt
    //   // expect()
    // });
    // it('should return the play the player just made', function() {
    //
    //   expect(testPlayer.plays()).toEqual('')
    // });

  // it should assign a player1 or a player2 marker (two tests)
  // it should not assign markers to a third player

  //it should take a turn
  //which adds to the player array (a couple of tests)
  //make sure no turn taken when no space on the board

  //it should check if it has won after making a turn (or is it the game that checks this?)
  //add to win counter when game is complete
  //make effort to ensure ties are handled correctly (game)

  //it should wait while the other player takes a turn (wait for the game)
  });
});
