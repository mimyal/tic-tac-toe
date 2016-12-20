import Game from 'game_raw';

describe('TicTacToe', function() {
  var testGame = new Game();
  describe('Game', function() {
    it('should have two player objects playerX and playerO', function() {
      expect(testGame.playerX).toBeDefined();
      expect(testGame.playerO).toBeDefined();

      expect(testGame.playerX.mark).toEqual('X');
      expect(testGame.playerO.mark).toEqual('O');
    });
    it('should instanciate a game board object', function() {
      expect(testGame.board).toBeDefined();
    });
  });
});

describe('Game', function() {
  var testGame = new Game();
  describe('playerAction', function() {
    it('should swap player turns each action', function() {
      testGame.locX = 0;
      testGame.locY = 0;
      expect(testGame.playerX.turn).toEqual(true);
      expect(testGame.playerO.turn).toEqual(false);
      testGame.playerAction();
      testGame.locX = 0;
      testGame.locY = 1;
      expect(testGame.playerO.turn).toEqual(true);
      expect(testGame.playerX.turn).toEqual(false);
    });
  });
});
describe('Game', function() {
  describe('playerAction', function() {
    var testGame;
    beforeEach(function() {
          testGame = new Game();
      });
    it('should put Os and Xs in the correct places on the board', function() {
      testGame.locX = 2;
      testGame.locY = 2;
      testGame.playerAction();
      expect(testGame.board.tiles[2][2]).toEqual('X');
      testGame.locX = 1;
      testGame.locY = 1;
      testGame.playerAction();
      expect(testGame.board.tiles[1][1]).toEqual('O');
    });
    it('should swap player turns each action', function() {
      testGame.locX = 0;
      testGame.locY = 1;
      testGame.playerAction(); // puts an X on board and:
      expect(testGame.playerX.turn).toBeFalsy();
      expect(testGame.playerO.turn).toBeTruthy();
      expect(testGame.startingPlayer).toEqual(testGame.playerX);
    });
    it('NOT YET IMPLEMENTED should not allow turns in tiles locations where turns have already been taken', function() {
      expect(false).toBeTruthy();
    });
  });
});
describe('Game', function() {
  var testGame = new Game();
  describe('restartGame', function() {
    it('should reset the game board and gives the turn to playerX', function() {
      // <-- Last method worked/tested; We know this works
      testGame.locX = 1;
      testGame.locY = 1;
      testGame.playerAction();
      // -->
      testGame.restartGame();
      expect(testGame.board.tiles[1][1]).toEqual('_');
      expect(testGame.playerO.turn).toBeTruthy();
      expect(testGame.playerX.turn).toBeFalsy();
      expect(testGame.startingPlayer).toEqual(testGame.playerO);
    });
  });
});

describe('Game', function() {
  var testGame = new Game();
  describe('validInput', function() {
    it('should return true if board location is unfilled, otherwise return false', function() {
      testGame.locX = 1;
      testGame.locY = 1;
      expect(testGame.validInput()).toBeTruthy();
      testGame.playerAction();
      expect(testGame.validInput()).toBeFalsy();
    });

  });
});

describe('Game', function() {
  var testGame;
  beforeEach(function() {
        testGame = new Game();
    });
  describe('checkStatus', function() {
    it('should return false if there is a win', function() {
      // gamestatus='game'
      //endgamewith win
      //expect(gmaestatus).toEqual('win')
    });
    it('should return false if game is a draw', function() {
      // gamestatus='game'
      //endgamewith draw
      //expect(gmaestatus).toEqual('draw')
    });
    it('it should return true if game just started', function() {
      // gamestatus='game'
      //handful of turns
      //expect(gmaestatus).toEqual('game')
    });
    it('should return true if game status game continue', function() {
      // gamestatus='game'
      //handful of turns
      //expect(gmaestatus).toEqual('game')
    });
  });
});

describe('Game', function() {
  var testGame;
  beforeEach(function() {
        testGame = new Game();
    });
  describe('matchWon', function() {
    it('should return true if the match is won', function() {
      testGame.currentPlayer.mark = 'X';
      testGame.stateOfBoard = [
        ["X", "X", "X"],
        ["_", "O", "_"],
        ["O", "_", "_"]
      ];
      testGame.locX = 0;
      testGame.locY = 2;
      var isWin = testGame.matchWon();
      expect(isWin).toBeTruthy();
    });
    it('should return false if match is not won', function() {
      testGame.currentPlayer.mark = 'X';
      testGame.stateOfBoard = [
        ["O", "X", "X"],
        ["_", "O", "_"],
        ["_", "_", "X"]
      ];
      testGame.locX = 2;
      testGame.locY = 2;
      var isWin = testGame.matchWon();
      expect(isWin).toBeFalsy();
    });

  });
});


// describe('Game', function() {
//   var testGame = new Game();
//   describe('game prototype method', function() {
//     it('should...', function() {
//
//     });
//
//   });
// });
