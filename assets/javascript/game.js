//global variables
var wins = 0;
var losses = 0;
var total = 0;
var targetNumber;
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var min;
var max;
var youWin;
var youLose;
var divisibility;
var timeOut;

$(document).ready(function () {
    //starts a new game without clicking the button & alerts user how to play
    newGame();
    swal("Click the crystals to collect points. If your total equals the target number, you win! If your total exceeds the target number, you lose. Let's start collecting!");
    //button onclick to start a new game at any time
    $("#newGame").click(newGame);
});

//function within onclick New Game
function newGame() {
    clearTimeout(timeOut);

    //initialize/reset variables
    total = 0;
    youWin = false;
    youLose = false;
    divisibility = false;
    $("#total").text(total);

    //Generate target number
    targetNumber = getRandomInt();
    $("#targetNumber").text(targetNumber);

    //assign random values for each crystal
    $(".crystals").each(function () {
        var ranValue = crystalValues[Math.floor(Math.random() * 12)];
        $(this).attr("value", ranValue);
        if (targetNumber%ranValue === 0) {
            divisibility = true;
        }
    });
    //checks divisibility of target number to ensure the random crystal values can add up to the target number
    //(I.E. it is possible to win)
    if (divisibility === false) {
        newGame();
    }
}
//crystals onclick - crystal value added to total & update total on UI
$(".crystals").click(crystalClick);

//fxn to generate random integer target number in the range of [19-120)
function getRandomInt(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (101)) + 19;
}
//fxn within crystals onclick in newGame fxn
function crystalClick() {
    if (youWin === true || youLose === true) {
        return;
    } else {
        total += parseInt($(this).attr("value"));
        $("#total").text(total);
        checkWinLose();
        updateUI();
    }
}
//fxn in newGame fxn to check if won or lost & set 10 second timeout
function checkWinLose() {
    if (total === targetNumber) {
        swal("You win! A new game will begin shortly or click the button to play again!");
        wins++;
        youWin = true;
        timeOut = setTimeout(newGame, 1000*10);
    }
    if (total > targetNumber) {
        swal("You lose! A new game will begin shortly or click the button to play again!");
        losses++;
        youLose = true;
        timeOut = setTimeout(newGame, 1000*10);
    }
}
//fxn within newGame fxn to update the UI
function updateUI() {
    $("#total").text(total);
    $("#wins").text(wins);
    $("#losses").text(losses);
}