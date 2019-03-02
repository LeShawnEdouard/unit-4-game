
// Target number for the player to target. //
var targetNumber = 

$("random-number").text(targetNumber);

var counter = 0;

// Array that includes the values for crystals //
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// For loop to assign a number for the crystals //
for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/space-infinity-stone-poster-style-1-cole-iba.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);

// Shows the number of wins/losses the player has. //
var wins = 0;
var losses = 0;

$("wins").text(wins);
$("losses").text(losses);