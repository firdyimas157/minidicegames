var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomDice1 + ".png";
var randomDiceImgSource = "images/" + randomDiceImage;
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src", randomDiceImgSource);

var randomDice2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomDice2 + ".png";
var randomDiceImgSource = "images/" + randomDiceImage;
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src", randomDiceImgSource);

if (randomDice1 > randomDice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins !";
} else if (randomDice1 < randomDice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
} else {
  document.querySelector("h1").innerHTML = "Draw ✋!";
}
