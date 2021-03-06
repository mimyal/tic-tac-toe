import Backbone from 'backbone';

var Board = function() { // it can do more complex things we wont see today/this week
    this.tiles = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"]
    ];

    this.winningBoards = {
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


};

export default Board;
