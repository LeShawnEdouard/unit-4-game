
// Math.floor used to randomize numbers between instructed ranges //
var targetNumber = Math.floor(Math.random() * 101 + 19);
var blueValue = Math.floor(Math.random() * 12 + 1);
var greenValue = Math.floor(Math.random() * 12 + 1);
var orangeValue = Math.floor(Math.random() * 12 + 1);
var redValue = Math.floor(Math.random() * 12 + 1);
var counter = 0;


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
$(".crystal-button").on("click", function() {

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#total-score").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);

    // If total-score matches random number condition //
    if (counter === targetNumber) {
      wins ++;
      counter = 0;
      $("#random-number").text(Math.floor(Math.random() * 101 + 19));
      $("#space").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#time").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#soul").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#reality").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#total-score").text(0);
    }

    // If total-score is greater than random number condition //
    else if (counter > targetNumber) {
      losses ++;
      counter = 0;
      targetNumber = "#random-number";
      $("#random-number").text(Math.floor(Math.random() * 101 + 19));
      $("#space").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#time").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#soul").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#reality").attr("value", Math.floor(Math.random() * 12 + 1));
      $("#total-score").text(0);

      // "value";
    }
});
