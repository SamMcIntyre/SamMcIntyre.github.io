

var num1 = genRandomNum();
var num2 = genRandomNum();

var sdpq = calculate(num1, num2);

var sumEl = document.getElementById("sum");
var difEl = document.getElementById("dif");
var proEl = document.getElementById("pro");
var quoEl = document.getElementById("quo");

sumEl.textContent = "Sum = " + sdpq[0];
difEl.textContent = "Difference = " + sdpq[1];
proEl.textContent = "Product = " + sdpq[2];
quoEl.textContent = "Quotient = " + sdpq[3];


function genRandomNum(){
  var randNum = Math.floor(Math.random() * 101);
  return randNum;
}

function calculate(num1, num2){
  var sum = num1 + num2;
  var diff = num1 - num2;
  var product = num1 * num2;
  var quotient = num1 / num2;

  var sdpq = [sum, diff, product, quotient];

  return sdpq;
}
