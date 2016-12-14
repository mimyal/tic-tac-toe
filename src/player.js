
var Player = function(){
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

Player.prototype.status = function () {
  // if(matchWin === true){
  //   endGame();
  // }
  // if(tie === true){
  //   newGame();
  // }
  // if(nextPlay === true){
  //     xO();
  // }
  };

Player.prototype.matchWin = function(){
  //add to this for deciding if the game has been won
  if (this.plays.includes()){
    return true;
  }
};

Player.prototype.newGame = function () {
    var newGame = true;
};

//this could be useful for an automated player later
Player.prototype.shuffle = function(){
    for (let i = this.plays.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [this.plays[i - 1], this.plays[j]] = [this.plays[j], this.plays[i - 1]];
    }
    console.log(this.plays);
    return this.plays;
};














//////////////////////
export default Player;
