var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
// console.log(randomNumber1);
// console.log(randomNumber2);

var randomsourc1 = "images/dice"+randomNumber1+".png";
var randomsourc2 = "images/dice"+randomNumber2+".png";
// console.log(randomsourc1);
// console.log(randomsourc2);

document.querySelector(".img1").setAttribute("src", randomsourc1);
document.querySelector(".img2").setAttribute("src", randomsourc2);

if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="💯Player 1 wins";
} else
if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins💯";
} else {
  document.querySelector("h1").innerHTML="Draw💯";
}
