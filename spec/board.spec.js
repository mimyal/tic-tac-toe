import Board from 'board';

//This seem to imply that Board is a prototype of TicTacToe? But the 'testing' Board is a new object
describe('TicTacToe', function() {
  var testBoard = new Board();
  describe('Board', function() {

    it('should contain a 2D array', function() {
      expect(testBoard.spaces).toContain([]);
    });
  });
});
//
// var testing = new Board();
// describe('Board', function() {
//
//   it('should keep track of plays', function() {
//     expect(testing.plays()).toEqual([]);
//   });
// });
// });



























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
