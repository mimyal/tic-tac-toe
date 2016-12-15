import Game from 'game';

describe('TicTacToe', function() {
  var testGame = new Game();
  describe('Game', function() {
    //    it will instanciate the two players
    it('should have two player objects P1 and P2', function() {
      expect(testGame.P1).toBeDefined();
      expect(testGame.P2).toBeDefined();

      expect(testGame.P1.mark).toEqual('X');
      expect(testGame.P2.mark).toEqual('O');
    });
    //    it will instanciate the game board
    it('should instanciate a game board object', function() {
      expect(testGame.gameBoard).toBeDefined();
    });
  });
});

describe('Game', function() {
  var testGame = new Game();
  describe('playerAction', function() {
    it('should swap player turns each action', function() {
      testGame.loc1 = 0;
      testGame.loc2 = 0;
      expect(testGame.P1.turn).toEqual(true);
      expect(testGame.P2.turn).toEqual(false);
      testGame.playerAction();
      testGame.loc1 = 0;
      testGame.loc2 = 1;
      expect(testGame.P2.turn).toEqual(true);
      expect(testGame.P1.turn).toEqual(false);
    });
    it('should fill the gameBoard.spaces array with Os and Xs', function() {
      // because of the last 'it test' some of the board is filled in
      expect(testGame.gameBoard.spaces[0][0]).toEqual('X');
      expect(testGame.gameBoard.spaces[0][1]).toEqual('0');
    });

  });
});

// describe('Game', function() {
//   var testGame = new Game();
//   describe('restart', function() {
//     it('should reset the game board', function() {
//       testGame.loc1 = 0;
//       testGame.loc2 = 0;
//       testGame.playerAction();
//       testGame.restart();
//       expect(testGame.gameBoard.spaces[0][0])).toEqual('_');
//
//     });
//   });
// });

// describe('Game', function() {
//   var testGame = new Game();
//   describe('game prototype method', function() {
//     it('should...', function() {
//
//     });
//
//   });
// });

// describe('Game', function() {
//   var testGame = new Game();
//   describe('status', function() {
//     it('should continue the game as long as the game is not a tie', function() {
//       //
//     });
//   });
// });
