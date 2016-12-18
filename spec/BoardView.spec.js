import BoardView from 'app/views/board_view';


describe('TicTacToe', function() {
  var testing = new BoardView();
  describe('board', function() {
    it('the possible plays should represent the length of the board squared', function() {
      expect(testing.possiblePlays).toEqual(Math.pow(testing.tiles.length, 2));
    });
    it('sets reset to use later', function() {
      expect(testing.reset).toEqual(9);
    });
    it('sets possiblePlays = reset', function() {
      expect(testing.possiblePlays).toEqual(testing.reset);
    });
  });
});

describe('TicTacToe', function() {
  var testBoard = new BoardView();
  describe('BoardView', function() {

    it('should set the 2D array correctly', function() {
      expect(
        testBoard.tiles[0][0]== "_" &&
        testBoard.tiles[0][1]== "_" &&
        testBoard.tiles[0][2]== "_"
      ).toBeTruthy();
      expect(
        testBoard.tiles[1][0]== "_" &&
        testBoard.tiles[1][1]== "_" &&
        testBoard.tiles[1][2]== "_"
      ).toBeTruthy();
      expect(
        testBoard.tiles[2][0]== "_" &&
        testBoard.tiles[2][1]== "_" &&
        testBoard.tiles[2][2]== "_"
      ).toBeTruthy();
    });
    it('should not include any marks at initialization', function() {
      expect((testBoard.tiles[0][1]) !== 'X').toBeTruthy();
      expect((testBoard.tiles[2][0]) !== 'O').toBeTruthy();
    });
    it('should not include any marks at initialization', function() {
      expect(testBoard.tiles[0][0]).toEqual('_');
      expect(testBoard.tiles[1][1]).toEqual('_');
    });
  });
});

describe('TicTacToe', function() {
  var testing = new BoardView();
  var testing2 = new BoardView();
  describe('plays', function() {
    it('should be the same for every player', function() {
      expect(testing.plays()).toEqual(testing2.plays());
    });
  });
});

describe('TicTacToe', function() {
  var testing = new BoardView();
  testing.possiblePlays = 0;
  describe('remaining', function() {
    it('should refresh the board to its original glory once there are no more moves left', function() {
      expect(testing.remaining()).toEqual(9);
    });
  });
});
