import Board from 'board';

describe('TicTacToe', function() {
  var testing = new Board();
  describe('Board', function() {
    it('should define the structure of the board', function() {
      expect(testing.events).toContain();
    // it('with or without input, the board stays the same', function(){
      // expect(testing.Board()).toEqual(9);
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
// describe('Scrabble', function() {
//     var testScrabble = new Scrabble();
//   describe('bonus', function(){
//     it('should give a bonus for any word that is 7 characters', function(){
//       expect(testScrabble.bonus('twitter')).toEqual();
//     });
//   });
// });
//
// describe('Scrabble', function() {
//     var testScrabble = new Scrabble();
//
//   describe('tilesDrawn', function(){
//     it('should return the array containing tiles drawn', function(){
//       expect(testScrabble.drawTiles(3)).toContain(Array);
//     });
//     it('should take the number of tiles specified in the function call', function(){
//       expect(testScrabble.drawTiles(3).tilesDrawn.length.toEqual(3));
//     });
//   });
// });
