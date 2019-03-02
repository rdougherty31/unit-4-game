//global variables
var wins = 0;
var losses = 0;
var total = 0;
var targetNumber;
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var min;
var max;
var ranValue;

$(document).ready(function () {
    //button onclick New Game
    $("#newGame").click(newGame);
});

//function within onclick New Game
function newGame() {
    console.log("starting game");

    //Generate targetNumber
    targetNumber = getRandomInt();
    $("#targetNumber").text(targetNumber);

    //call updateUI function
    updateUI();
    console.log("update UI 1");

    //assign random values for each crystal
    $(".crystals").each(function () {
        ranValue = crystalValues[Math.floor(Math.random() * 12)];
        $(this).attr("value", ranValue);
        console.log("assigned values");
    });

    //crystals onclick - value added to total & update total on UI
    $(".crystals").click(crystalClick);
    console.log("crystal onclick1");

    //check if win/lose function
    checkWinLose();
    console.log("check win/lose1");
}

//fxn to generate random target number
function getRandomInt(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (101)) + 19;
}
//fxn within crystals onclick in newGame fxn
function crystalClick() {
    console.log($(this).attr("value"));
    total += parseInt($(this).attr("value"));
    $("#total").text(total);
    console.log("crystal onclick2");
}

//fxn in newGame fxn to check if won or lost
function checkWinLose() {
    if (total === targetNumber) {
        alert("You win!");
        wins++;
    }
    if (total > targetNumber) {
        alert("You lose!");
        losses++;
    }
    console.log("check win/lose2");
}
//fxn within newGame fxn to update the UI
function updateUI() {
    //update variables on UI
    $("#total").text(total);
    $("#wins").text(wins);
    $("#losses").text(losses);
    console.log("update UI 2");
}