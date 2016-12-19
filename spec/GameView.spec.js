// import GameView from 'app/views/game_view';
//
// describe('TicTacToe', function() {
//   var testGame = new GameView();
//   describe('GameView', function() {
//     it('should have two player objects playerX and playerO', function() {
//       expect(testGame.playerX).toBeDefined();
//       expect(testGame.playerO).toBeDefined();
//
//       expect(testGame.playerX.mark).toEqual('X');
//       expect(testGame.playerO.mark).toEqual('O');
//     });
//     it('should instanciate a game board object', function() {
//       expect(testGame.board).toBeDefined();
//     });
//   });
// });
//
// describe('GameView', function() {
//   var testGame = new GameView();
//   describe('playerAction', function() {
//     it('should swap player turns each action', function() {
//       testGame.locX = 0;
//       testGame.locY = 0;
//       expect(testGame.playerX.turn).toEqual(true);
//       expect(testGame.playerO.turn).toEqual(false);
//       testGame.playerAction();
//       testGame.locX = 0;
//       testGame.locY = 1;
//       expect(testGame.playerO.turn).toEqual(true);
//       expect(testGame.playerX.turn).toEqual(false);
//     });
//   });
// });
// describe('GameView', function() {
//   var testGame = new GameView();
//   describe('playerAction', function() {
//     it('should put Os and Xs in the correct places on the board', function() {
//       testGame.locX = 2;
//       testGame.locY = 2;
//       testGame.playerAction();
//       expect(testGame.board[2][2]).toEqual('X');
//       testGame.locX = 1;
//       testGame.locY = 1;
//       testGame.playerAction();
//       expect(testGame.board[1][1]).toEqual('O');
//     });
//     it('should swap player turns each action', function() {
//       //this works as we tested it below
//       testGame.restart();
//       testGame.locX = 0;
//       testGame.locY = 1;
//       testGame.playerAction(); // puts an X on board and:
//       expect(testGame.playerX.turn).toBeFalsy();
//       expect(testGame.playerO.turn).toBeTruthy();
//     });
//   });
// });
// describe('GameView', function() {
//   var testGame = new GameView();
//   describe('restart', function() {
//     it('should reset the game board and gives the turn to playerX', function() {
//       // <-- Last method worked/tested; We know this works
//       testGame.locX = 1;
//       testGame.locY = 1;
//       testGame.playerAction();
//       // -->
//       testGame.restart();
//       expect(testGame.board[1][1]).toEqual('_');
//       expect(testGame.playerX.turn).toBeTruthy();
//       expect(testGame.playerO.turn).toBeFalsy();
//     });
//   });
// });
//
// describe('GameView', function() {
//   var testGame = new GameView();
//   describe('validInput', function() {
//     it('should return true if board location is unfilled, otherwise return false', function() {
//       testGame.locX = 1;
//       testGame.locY = 1;
//       expect(testGame.validInput()).toBeTruthy();
//       testGame.playerAction();
//       expect(testGame.validInput()).toBeFalsy();
//     });
//
//   });
// });
//
// // describe('GameView', function() {
// //   var testGame = new GameView();
// //   describe('checkStatus', function() {
// //     it('populates the currentHash, if there is none', function() {
// //       expect(testGame.currentHash).toEqual({});
// //       testGame.locX = 1;
// //       testGame.locY = 2;
// //       testGame.playerAction();
// //
// //       testGame.checkStatus(); // should populate the key '12' with value 'X'
// //       expect(testGame.currentHash).toEqual({});
// //
// //     });
// //
// //   });
// // });
//
// // describe('GameView', function() {
// //   var testGame = new GameView();
// //   describe('game prototype method', function() {
// //     it('should...', function() {
// //
// //     });
// //
// //   });
// // });
//
// // describe('GameView', function() {
// //   var testGame = new GameView();
// //   describe('status', function() {
// //     it('should continue the game as long as the game is not a tie', function() {
// //       //
// //     });
// //   });
// // });
