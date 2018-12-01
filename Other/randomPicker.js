

var choices = ["San Jose", "Qdoba", "Helens"];

var pick = Math.floor(Math.random()*choices.length-1);

document.getElementById("vote").textContent = choices[pick];

