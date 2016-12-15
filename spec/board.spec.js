import Board from 'board';


describe('TicTacToe', function() {
  var testing = new Board();
  describe('board', function() {
    it('the possible plays should represent the length of the board squared', function() {
      expect(testing.possiblePlays).toEqual(Math.pow(testing.spaces.length, 2));
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
  var testBoard = new Board();
  describe('Board', function() {

    it('should set the 2D array correctly', function() {
      expect(
        testBoard.spaces[0][0]== "_" &&
        testBoard.spaces[0][1]== "_" &&
        testBoard.spaces[0][2]== "_"
      ).toBeTruthy();
      expect(
        testBoard.spaces[1][0]== "_" &&
        testBoard.spaces[1][1]== "_" &&
        testBoard.spaces[1][2]== "_"
      ).toBeTruthy();
      expect(
        testBoard.spaces[2][0]== "_" &&
        testBoard.spaces[2][1]== "_" &&
        testBoard.spaces[2][2]== "_"
      ).toBeTruthy();
    });
    it('should not include any marks at initialization', function() {
      expect((testBoard.spaces[0][1]) !== 'X').toBeTruthy();
      expect((testBoard.spaces[2][0]) !== 'O').toBeTruthy();
    });
    it('should not include any marks at initialization', function() {
      expect(testBoard.spaces[0][0]).toEqual('_');
      expect(testBoard.spaces[1][1]).toEqual('_');
    });
  });
});

describe('TicTacToe', function() {
  var testing = new Board();
  var testing2 = new Board();
  describe('plays', function() {
    it('should be the same for every player', function() {
      expect(testing.plays()).toEqual(testing2.plays());
    });
  });
});

describe('TicTacToe', function() {
  var testing = new Board();
  testing.possiblePlays = 0;
  describe('remaining', function() {
    it('should refresh the board to its original glory once there are no more moves left', function() {
      expect(testing.remaining()).toEqual(9);
    });
  });
});
























// describe('Scrabble', function() {
//   var shufflesTwo = new Scrabble();
//   var shuffleScrabble = new Scrabble();
//   describe('shuffle', function(){
//     it('should return all of the letters', function(){
//       expect(shuffleScrabble.shuffle(this.tiles)!=shufflesTwo.shuffle(this.tiles)).toBeTruthy();
//     });
//   });
// });
//
