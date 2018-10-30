

var elArray = ["Apple", "Balls", "Cat", "Dog", "Elephant", "Fish44"];

var el1 = document.getElementById("one");
var el2 = document.getElementById("two");
var el3 = document.getElementById("three");
var el4 = document.getElementById("four");

el1.textContent = genRandomElement(elArray);
el2.textContent = genRandomElement(elArray);
el3.textContent = genRandomElement(elArray);
el4.textContent = genRandomElement(elArray);

function genRandomElement(elArray){
  var randIndex = Math.round(Math.random() * (elArray.length - 1));

  return elArray[randIndex];
}
