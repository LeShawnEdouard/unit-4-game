// document.addEventListener("DOMContentLoaded", function(event) {

// Shows the number of wins/losses the player has. //
// var wins = 0;
// var losses = 0;

// $("wins").text(wins);
// $("losses").text(losses);


    // Target number for the player to target. //
var targetNumber = 53;

$("random-number").text(targetNumber);

var counter = 0;

// Math.floor used to randomize numbers between instructed ranges //
// .attr used to assign values to the crystals //
targetNumber = Math.floor(Math.random() * 101 + 19);
redValue = Math.floor(Math.random() * 12 + 1);
blueValue = Math.floor(Math.random() * 12 + 1);
greenValue = Math.floor(Math.random() * 12 + 1);
yellowValue = Math.floor(Math.random() * 12 + 1);
totalScore = 0;
$("#space").attr("value", redValue);
$("#time").attr("value", blueValue);
$("#soul").attr("value", greenValue);
$("#reality").attr("value", yellowValue);

// For loop to assign a number for the crystals //
for (var i = 0; i < numberOptions.length; i++) {
    
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/space-infinity-stone-poster-style-1-cole-iba.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#space-crystal").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
    console.log(crystalValue)

    var crystalValue = ($(this).attr("data-crystalvalue"));
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