

var game1 = new bBallGame("SLUH", "CBC", genScore(), genScore());
var game2 = new bBallGame("Vianney", "DeSmet", genScore(), genScore());
var game3 = new bBallGame("Lindbergh", "Kirkwood", genScore(), genScore());
var game4 = new bBallGame("DeSmet", "SLUH", genScore(), genScore());
var game5 = new bBallGame("CBC", "Vianney", genScore(), genScore());
var game6 = new bBallGame("Kirkwood", "Lindbergh", genScore(), genScore());
var games = [game1, game2, game3, game4, game5, game6];

var g1El = document.getElementById("game1");
var g2El = document.getElementById("game2");
var g3El = document.getElementById("game3");
var g4El = document.getElementById("game4");
var g5El = document.getElementById("game5");
var g6El = document.getElementById("game6");
var elems = [g1El, g2El, g3El, g4El, g5El, g6El];

for(i = 0; i < 6; i++){
  elems[i].textContent = games[i].getSummary();
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––

function bBallGame(hoT, viT, hoSc, viSc){
  this.homeTeam = hoT;
  this.visTeam = viT;
  this.homeScore = hoSc;
  this.visScore = viSc;

  this.winningTeam = findWinner(hoT, viT, hoSc, viSc);

  this.getSummary = function(){
    var gameSum = [this.homeTeam, this.homeScore, this.visTeam, this.visScore];

    return gameSum;
  };
}

function genScore(){
  var score = Math.floor(Math.random() * 20) + 70;

  return score;
}

function findWinner(hoT, viT, hoSc, viSc){
  var winningTeam;

  if(hoSc > viSc)
    winningTeam = hoT;
  else if(viSc > hoSc)
    winningTeam = viT;
  else
    winningTeam = "Tie Game";

  return winningTeam;
}
