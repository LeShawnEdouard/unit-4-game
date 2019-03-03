// document.addEventListener("DOMContentLoaded", function(event) {

// Shows the number of wins/losses the player has. //
// var wins = 0;
// var losses = 0;

// $("wins").text(wins);
// $("losses").text(losses);



$("#random-number").append(targetNumber);

var counter = 0;




// for (var i = 0; i < numberOptions.length; i++) {
    // Math.floor used to randomize numbers between instructed ranges //
    // .attr used to assign values to the crystals //
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    blueValue = Math.floor(Math.random() * 12 + 1);
    greenValue = Math.floor(Math.random() * 12 + 1);
    orangeValue = Math.floor(Math.random() * 12 + 1);
    redValue = Math.floor(Math.random() * 12 + 1);
    totalScore = 0;
    console.log(targetNumber)
    console.log(blueValue)
    console.log(greenValue)
    console.log(orangeValue)
    console.log(redValue)
    $("#space").attr("value", blueValue);
    $("#time").attr("value", greenValue);
    $("#soul").attr("value", orangeValue);
    $("#reality").attr("value", redValue);


    $("#space").append(blueValue);
    $("#time").append(greenValue);
    $("#soul").append(orangeValue);
    $("#reality").append(redValue);
// }



$("#crystal-button").on("click", function() {

    // var crystalValue = ($(this).attr("value"));
    // crystalValue = parseInt(crystalValue);
    
    // for (var i = 0; i < numberOptions.length; i++) {
    //     // Math.floor used to randomize numbers between instructed ranges //
    //     // .attr used to assign values to the crystals //
    //     targetNumber = Math.floor(Math.random() * 101 + 19);
    //     blueValue = Math.floor(Math.random() * 12 + 1);
    //     greenValue = Math.floor(Math.random() * 12 + 1);
    //     orangeValue = Math.floor(Math.random() * 12 + 1);
    //     redValue = Math.floor(Math.random() * 12 + 1);
    //     totalScore = 0;
    
    //     $("#space").attr("value", blueValue);
    //     $("#time").attr("value", greenValue);
    //     $("#soul").attr("value", orangeValue);
    //     $("#reality").attr("value", redValue);
    
    
    //     $("#space").append(blueValue);
    //     $("#time").append(greenValue);
    //     $("#soul").append(orangeValue);
    //     $("#reality").append(redValue);
    // }

    counter += "value";

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
});




// for (var i = 0; i < numberOptions.length; i++) {
    
//     var imageCrystal = $("<img>");

//     imageCrystal.addClass("crystal-image");

//     imageCrystal.attr("src", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/space-infinity-stone-poster-style-1-cole-iba.jpg");

//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     $("#space-crystal").append(imageCrystal);
// }