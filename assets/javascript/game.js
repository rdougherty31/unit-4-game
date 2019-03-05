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
    //starts a new game without clicking the button
    newGame();
    alert("Click the crystals to collect points! Don't exceed the target number or you will lose!");
    //button onclick to start a new game at any time
    $("#newGame").click(newGame);
});

//function within onclick New Game
function newGame() {
    console.log("starting game");
    //clear timeout
    clearTimeout(timeOut);

    //set total=0, youWin = false and youLose = false
    total = 0;
    youWin = false;
    youLose = false;
    divisibility = false;
    $("#total").text(total);

    //Generate targetNumber
    targetNumber = getRandomInt();
    $("#targetNumber").text(targetNumber);

    //assign random values for each crystal
    $(".crystals").each(function () {
        var ranValue = crystalValues[Math.floor(Math.random() * 12)];
        $(this).attr("value", ranValue);
        if (targetNumber%ranValue === 0) {
            divisibility = true;
        }
        console.log("assigned values");
    });
    //checks divisibility
    if (divisibility === false) {
        newGame();
    }
}
//crystals onclick - value added to total & update total on UI
$(".crystals").click(crystalClick);
console.log("crystal onclick1");
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
        console.log($(this).attr("value"));
        total += parseInt($(this).attr("value"));
        $("#total").text(total);
        console.log("crystal onclick2");
        //check if win/lose function
        checkWinLose();
        console.log("check win/lose1");
        updateUI();
        console.log("updated win/lose");
    }
}
//fxn in newGame fxn to check if won or lost & set 10 second timeout
function checkWinLose() {
    if (total === targetNumber) {
        alert("You win!");
        wins++;
        youWin = true;
        alert("A new game will begin shortly - or click the button to play again!");
        timeOut = setTimeout(newGame, 1000*10);
    }
    if (total > targetNumber) {
        alert("You lose!");
        losses++;
        youLose = true;
        alert("A new game will begin shortly - or click the button to play again!");
        timeOut = setTimeout(newGame, 1000*10);
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