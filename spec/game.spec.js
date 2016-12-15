import Game from 'game';

describe('TicTacToe', function() {
  var testGame = new Game();
  describe('Game', function() {
    it('should have two player objects P1 and P2', function() {
      expect(testGame.P1).toBeDefined();
      expect(testGame.P2).toBeDefined();

      expect(testGame.P1.mark).toEqual('X');
      expect(testGame.P2.mark).toEqual('O');
    });
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
  });
});
describe('Game', function() {
  var testGame = new Game();
  describe('playerAction', function() {
    it('should put Os and Xs in the correct places on the board', function() {
      testGame.loc1 = 2;
      testGame.loc2 = 2;
      testGame.playerAction();
      expect(testGame.gameBoard.spaces[2][2]).toEqual('X');
      testGame.loc1 = 1;
      testGame.loc2 = 1;
      testGame.playerAction();
      expect(testGame.gameBoard.spaces[1][1]).toEqual('O');
    });
    it('should swap player turns each action', function() {
      //this works as we tested it below
      testGame.restart();
      testGame.loc1 = 0;
      testGame.loc2 = 1;
      testGame.playerAction(); // puts an X on board and:
      expect(testGame.P1.turn).toBeFalsy();
      expect(testGame.P2.turn).toBeTruthy();
    });
  });
});
describe('Game', function() {
  var testGame = new Game();
  describe('restart', function() {
    it('should reset the game board and gives the turn to P1', function() {
      // <-- Last method worked/tested; We know this works
      testGame.loc1 = 1;
      testGame.loc2 = 1;
      testGame.playerAction();
      // -->
      testGame.restart();
      expect(testGame.gameBoard.spaces[1][1]).toEqual('_');
      expect(testGame.P1.turn).toBeTruthy();
      expect(testGame.P2.turn).toBeFalsy();
    });
  });
});

describe('Game', function() {
  var testGame = new Game();
  describe('validInput', function() {
    it('should return true if board location is unfilled, otherwise return false', function() {
      testGame.loc1 = 1;
      testGame.loc2 = 1;
      expect(testGame.validInput()).toBeTruthy();
      testGame.playerAction();
      expect(testGame.validInput()).toBeFalsy();
    });

  });
});

// describe('Game', function() {
//   var testGame = new Game();
//   describe('checkStatus', function() {
//     it('populates the currentHash, if there is none', function() {
//       expect(testGame.currentHash).toEqual({});
//       testGame.loc1 = 1;
//       testGame.loc2 = 2;
//       testGame.playerAction();
//
//       testGame.checkStatus(); // should populate the key '12' with value 'X'
//       expect(testGame.currentHash).toEqual({});
//
//     });
//
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
