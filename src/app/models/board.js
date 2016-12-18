import Backbone from 'backbone';

var Board = Backbone.Model.extend({
  defaults: { // backbone keyword, similar to schema in rails, does not need to keep all keys, we can add as we need more
    tiles: [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"]
    ]

  },
  initialize: function() { // it can do more complex things we wont see today/this week
    // console.log("Created new contact with name " + this.get('name'));
    var winningBoards = {
      0: [
        [[0,0], [0,1], [0,2]], // top row
        [[0,0], [1,1], [2,2]], // diagonal1
        [[0,0], [1,0], [2,0]] // left down
      ],
      1: [
        [[0,0], [0,1], [0,2]], // top row
        [[0,1], [1,1], [2,1]] //center down
      ],
      2: [
        [[0,0], [0,1], [0,2]], // top row
        [[0,2], [1,2], [2,2]], // right down
        [[0,2], [1,1], [2,0]] // diagonal2
      ],
      3: [
        [[0,0], [1,0], [2,0]], // left down
        [[1,0], [1,1], [1,2]] // middle row
      ],
      4: [ // center tile [1,1]
        [[0,1], [1,1], [2,1]], //center down
        [[1,0], [1,1], [1,2]], // middle row
        [[0,0], [1,1], [2,2]], // diagonal1
        [[0,2], [1,1], [2,0]] // diagonal2
      ],
      5: [
        [[1,0], [1,1], [1,2]], // middle row
        [[0,2], [1,2], [2,2]], // right down
      ],
      6: [
        [[2,0], [2,1], [2,2]], // bottom row
        [[0,0], [1,0], [2,0]], // left down
        [[0,2], [1,1], [2,0]] // diagonal2
      ],
      7: [
        [[2,0], [2,1], [2,2]], // bottom row
        [[0,1], [1,1], [2,1]] //center down
      ],
      8: [
        [[2,0], [2,1], [2,2]], // bottom row
        [[0,2], [1,2], [2,2]], // right down
        [[0,0], [1,1], [2,2]], // diagonal1
      ]

    }; //end of winningBoards
  }
}


});

export default Board;
