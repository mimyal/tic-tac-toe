import Board from 'board';

describe('TicTacToe', function() {
  var testing = new Board();
  describe('Board', function() {
    it('should keep track of plays', function() {
      expect(testing.plays()).toEqual([]);
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
