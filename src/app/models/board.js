import Backbone from 'backbone';

var Board = Backbone.Model.extend({
  defaults: { // backbone keyword, similar to schema in rails, does not need to keep all keys, we can add as we need more
    tiles: [
              ["_", "_", "_"],
              ["_", "_", "_"],
              ["_", "_", "_"]
            ] ,
// },
//   initialize: function() { // it can do more complex things we wont see today/this week
//     console.log("Created new contact with name " + this.get('name'));
  }
// //
});
//
export default Board;
