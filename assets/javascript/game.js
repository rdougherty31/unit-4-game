//global variables
var wins = 0;
var losses = 0;
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//onclick New Game
$(".newGame").click(newGame());


//function within onclick of crystals
function crystalClick() { }

//function to check if won
function checkWin() {
    if (points === targetNumber) {
        alert("You win!");
        wins++;

    }
}
//function to check if lost
function checkLose() {
    if (points > targetNumber) {
        alert("You lose!");
        losses++;
    }
}
//function to update the UI
function updateUI() {
    //reset variables and generate targetNumber
    var targetNumber = Math.floor(Math.random() * (102) + 1);
    $("#targetNumber").text(targetNumber);
    var points = 0;
    $("#points").text(points);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

//function within onclick New Game
function newGame() {
    //call updateUI function
    updateUI();
    
    //assign random values for each crystal
    
    //crystals onclick
    $(".crystals").click(crystalClick())

    //value added to total & update total on UI
    total =+ total;
    $("#total").text(total);
    //check win function
    checkWin();
    //check lost function
    checkLose();
}