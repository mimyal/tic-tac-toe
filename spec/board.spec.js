import Board from 'board';


describe('TicTacToe', function() {
  var testing = new Board();
  describe('board', function() {
    it('the possible plays should represent the length of the board squared', function() {
      expect(testing.possiblePlays).toEqual(Math.pow(testing.spaces.length, 2));
    });
  });
});

describe('TicTacToe', function() {
  var testing = new Board();
  describe('plays', function() {
    it('should keep track of plays', function() {
      expect(testing.plays()).toEqual([]);
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
