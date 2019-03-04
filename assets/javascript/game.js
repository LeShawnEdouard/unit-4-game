// document.addEventListener("DOMContentLoaded", function(event) {

// Shows the number of wins/losses the player has. //
// var wins = 0;
// var losses = 0;

// $("wins").text(wins);
// $("losses").text(losses);



// Math.floor used to randomize numbers between instructed ranges //
// .attr used to assign values to the crystals //
var targetNumber = Math.floor(Math.random() * 101 + 19);
var blueValue = Math.floor(Math.random() * 12 + 1);
var greenValue = Math.floor(Math.random() * 12 + 1);
var orangeValue = Math.floor(Math.random() * 12 + 1);
var redValue = Math.floor(Math.random() * 12 + 1);
var counter = 0;
console.log(targetNumber)
console.log(blueValue)
console.log(greenValue)
console.log(orangeValue)
console.log(redValue)

$("#space").attr("value", blueValue);
$("#time").attr("value", greenValue);
$("#soul").attr("value", orangeValue);
$("#reality").attr("value", redValue);

$("#random-number").text(targetNumber);
$("#space").append(blueValue);
$("#time").append(greenValue);
$("#soul").append(orangeValue);
$("#reality").append(redValue);
$("#total-score").append(counter);
    



$(".crystal-button").on("click", function() {

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
});
