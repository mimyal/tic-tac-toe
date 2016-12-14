import Board from 'board';

//This seem to imply that Board is a prototype of TicTacToe? But the 'testing' Board is a new object
describe('TicTacToe', function() {
  var testBoard = new Board();
  describe('Board', function() {

    it('should set the 2D array correctly', function() {
      expect(
        testBoard.spaces[0][0]== 1 &&
        testBoard.spaces[0][1]== 2 &&
        testBoard.spaces[0][2]== 3
      ).toBeTruthy();
      expect(
        testBoard.spaces[1][0]== 4 &&
        testBoard.spaces[1][1]== 5 &&
        testBoard.spaces[1][2]== 6
      ).toBeTruthy();
      expect(
        testBoard.spaces[2][0]== 7 &&
        testBoard.spaces[2][1]== 8 &&
        testBoard.spaces[2][2]== 9
      ).toBeTruthy();
    });
    it('should set marker variables X and O', function() {
      expect(testBoard.markerX).toEqual('X');
      expect(testBoard.markerO).toEqual('O');
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
