

var Player = function(){
  this.Plays = [];
  this.Score = 0;
};

//this could be useful for an automated player later
Player.prototype.shuffle = function(){
    for (let i = this.tiles.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [this.tiles[i - 1], this.tiles[j]] = [this.tiles[j], this.tiles[i - 1]];
    }
    console.log(this.tiles);
    return this.tiles;
};
