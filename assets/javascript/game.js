
// Math.floor used to randomize numbers between instructed ranges //
var targetNumber = Math.floor(Math.random() * 101 + 19);
var blueValue = Math.floor(Math.random() * 12 + 1);
var greenValue = Math.floor(Math.random() * 12 + 1);
var orangeValue = Math.floor(Math.random() * 12 + 1);
var redValue = Math.floor(Math.random() * 12 + 1);
var counter = 0;

// Audio files to play background music //
var audio = document.getElementById("thanos-voice");

function playAudio() {
  audio.play();
};

var audioTwo = document.getElementById("background-music");

var audioControls = audio;

// function playAudio() {
//   audioControls.play();
// };

$("#play").click(function() {
  $(":button").play();
});

// function pauseAudio() { 
//   audioControls.pause();
// };

$("#pause").click(function() {
  $(":button").pause();
});


// Using an attribute to add values to the crystal buttons //
$("#space").attr("value", blueValue);
$("#time").attr("value", greenValue);
$("#soul").attr("value", orangeValue);
$("#reality").attr("value", redValue);


// Will display the random number to match //
$("#random-number").text(targetNumber);


// Variables that will help display number of wins/losses //
var wins = 0;
var losses = 0;


// Function to talley the values together //
// Function to determine whether the total number
// matchs the target number or not //
$(".crystal-button").on("click", function () {
  console.log(targetNumber);
  var crystalValue = ($(this).attr("value"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  $("#total-score").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);


  // Function to reset the game //
  function setGame() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * 101 + 19);
    blueValue = Math.floor(Math.random() * 12 + 1);
    greenValue = Math.floor(Math.random() * 12 + 1);
    orangeValue = Math.floor(Math.random() * 12 + 1);
    redValue = Math.floor(Math.random() * 12 + 1);
    $("#random-number").text(targetNumber);
    $("#space").attr("value", blueValue);
    $("#time").attr("value", greenValue);
    $("#soul").attr("value", orangeValue);
    $("#reality").attr("value", redValue);
    $("#total-score").text(0);
  }

  // If total-score matches random number condition //
  if (counter === targetNumber) {
    wins++;
    $("#wins").text(wins);
    setGame();
    console.log(setGame);
  }

  // If total-score is greater than random number condition //
  else if (counter > targetNumber) {
    losses++;
    $("#losses").text(losses);
    setGame();
    console.log(setGame);
  }
});
