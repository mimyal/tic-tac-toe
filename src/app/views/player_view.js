import Game from 'game';


var Player = function(){
  //every play that has happened deducted here (is this necessary?)
  // this.name = "";
  this.mark = "";  // x for p1 or o for p2
  this.p2plays = []; // track plays
  this.score = 0; // winning?
  this.turns = 0; // how many times have you played
  this.turn = false; //is it your turn or the other players
  if(this.turns > 2){
     if (this.plays.includes [[0][0]], [[0][1]], [[0][2]]){
     winStatus = true;
       if (this.plays.includes [[1][0]]){
       }
     }
   }
};


//this could be useful for an automated player later
Player.prototype.shuffle = function(){
    for (let i = this.possiblePlays.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [this.plays[i - 1], this.possiblePlays[j]] = [this.possiblePlays[j], this.possiblePlays[i - 1]];
    }
    console.log(this.possiblePlays);
    return this.possiblePlays;
};


// var P1 = new Player();
// var P2 = new Player();












//////////////////////
export default Player;
