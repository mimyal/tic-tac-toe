
var Player = function(){
  this.possiblePlays = [1,2,3,4,5,6,7,8,9];
  this.name = "";
  this.plays = [];
  this.score = 0;
  this.turns = 0;
  if(this.turns > 2){
     if (this.plays.includes(matchWin)){
     winStatus = true;
}}};

Player.prototype.xO = function () {
  this.who = "";
  if (this.who === "X"){
    this.who = "O";}
    else {
    this.who = "X";}
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














//////////////////////
export default Player;
