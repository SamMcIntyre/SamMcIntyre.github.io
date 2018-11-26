

var el1 = document.querySelector("h1.first"); // #1
var el1Text = el1.textContent;
el1.innerHTML = "<b><i>" + el1Text + "</i></b>"; // #2

var liEls = document.getElementsByTagName("li"); // #3
var ulEl = liEls[0].parentNode; // #4
ulEl.setAttribute("class", "first"); // #5

var newLiEl = document.createElement("li"); // #6
var newTextNode = document.createTextNode("Hello there."); // #7
newLiEl.appendChild(newTextNode); // #8
ulEl.appendChild(newLiEl); // #9
