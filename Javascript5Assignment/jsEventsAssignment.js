

var xBox = document.getElementById("xCoordinate");
var yBox = document.getElementById("yCoordinate");


document.addEventListener("mousemove", sendCursorPos, false);
document.addEventListener("keydown", sendZeroPos, false);

function writeCoordinates(x, y){
  xBox.textContent = x;
  yBox.textContent = y;
}

function sendCursorPos(e){
  writeCoordinates(e.clientX, e.clientY);
}

function sendZeroPos(e){
  if(e.keyCode == 67){
    writeCoordinates(0, 0);
  }
}
