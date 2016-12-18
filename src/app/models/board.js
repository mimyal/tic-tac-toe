import Backbone from 'backbone';

var Board = Backbone.Model.extend({
  defaults: { // backbone keyword, similar to schema in rails, does not need to keep all keys, we can add as we need more
    tiles: [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"]
    ] ,
    binaryBoardRepresentation: 0b000000000000000000 // 00 is no change, 10 is player 1, 01 is player 2, 11 is invalid

  },
  initialize: function() { // it can do more complex things we wont see today/this week
    // console.log("Created new contact with name " + this.get('name'));
    var winnningBoards = {
      0: [ // where [0,0] is the currentPosition
        0b010101, // [0,0], [0,1], [0,2] on the currentGrid // top row
        0b101010, // player 2
        0b000001000001000001, // [0,0], [1,0], [2,0] // top left down
        0b000010000010000010,
        0b010000000100000001, // [0,0], [1,1], [2,2] // diagonal
        0b100000001000000010
      ],
      1: [
        0b010101, // from 0
        0b101010,
        0b000100000100000100, // [0,1], [1,1], [2,1] // center down
        0b001000001000001000
      ],
      2: [
        0b010101, // from 0
        0b101010,
        0b010000010000010000, // [0,2], [1,2], [2,2] // top right down
        0b100000100000100000,
        0b000001000100010000, // [0,2], [1,1], [2,0] diagonal
        0b000010001000100000
      ],
      3: [
        0b000001000001000001, // from 0
        0b000010000010000010,
        0b000000010101000000, // [1,0], [1,1], [1,2] // second row
        0b000000101010000000
      ],
      4: [ //center tile
        0b010000000100000001, // [0,0], [1,1], [2,2] // diagonal
        0b100000001000000010,
        0b000001000100010000, // [0,2], [1,1], [2,0] diagonal
        0b000010001000100000,
        0b000100000100000100, // from above // center down
        0b001000001000001000,
        0b000000010101000000, // from above // second row
        0b000000101010000000
      ],
      5: [ // [1,2]
        0b010000010000010000, // from above // top right down
        0b100000100000100000,
        0b000000010101000000, // from above // second row
        0b000000101010000000
      ],
      6: [ // [2,0]
        0b000001000001000001, // from above // top left down
        0b000010000010000010,
        0b010101000000000000, // [2,0], [2,1], [2,2] third row
        0b101010000000000000
      ],
      7: [
        0b000100000100000100, // from above // center down
        0b001000001000001000,
        0b010101000000000000, // from above // third row
        0b101010000000000000
      ],
      8: [
        0b010000010000010000, // from above // top right down
        0b100000100000100000,
        0b010101000000000000, // from above // third row
        0b101010000000000000
      ]
};


}

});

export default Board;
