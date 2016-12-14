
var Player = function(){
  this.possiblePlays = [1,2,3,4,5,6,7,8,9]; //every play that has happened deducted here
  // this.name = "";
  this.mark = ""; // x or o
  this.plays = []; // track plays
  this.score = 0; // winning?
  this.turns = 0; // how many times have you played
  this.turn = false; //is it your turn or the other players
  if(this.turns > 2){
     if (this.plays.includes [[0][0]], [[0][1]], [[0][2]]){
     winStatus = true;
     if (this.plays.includes [[1][0]]){
       
     }
}}};

// // Will return the play the player made
// Player.prototype.plays = function(){
//   // here player will return
// };


//this could be useful for an automated player later
Player.prototype.shuffle = function(){
    for (let i = this.possiblePlays.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [this.plays[i - 1], this.possiblePlays[j]] = [this.possiblePlays[j], this.possiblePlays[i - 1]];
    }
    console.log(this.possiblePlays);
    return this.possiblePlays;
};














//////////////////////
export default Player;
