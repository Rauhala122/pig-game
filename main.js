// Variables for the application
var scores, roundScore, activePlayer, dice;

// Init variables
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// Add event listener to dice roll button
document.querySelector(".btn-roll").addEventListener("click", rollDice)

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// Roll dice function
function rollDice() {
    document.querySelector(".dice").style.display = "block";
    // Random number
    dice = Math.floor(Math.random() * 6) + 1;
    
    // Display the result
    document.querySelector("#current-" + activePlayer).textContent = dice
    
    // Change the image to current dice number
    document.querySelector(".dice").src = "dice-" + dice + ".png"    
    
    // Update the round score IF the rolled number wasnt a 1
    if(dice !== 1) {
        // Add score
        roundScore += dice
        document.querySelector("#current-" + activePlayer).textContent = roundScore
        
    } else {
        // Next's players turn
        changePlayer()
    } 
}

document.querySelector(".btn-hold").addEventListener("click", function() { 
    // Add current score to global score
    scores[activePlayer] += roundScore
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 10) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner!"
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
         changePlayer()   
    }
});

// Change player function

function changePlayer() {
    document.querySelector(".dice").style.display = "none";
    document.getElementById("current-" + activePlayer).textContent = 0;        
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;    roundScore = 0;    
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
}

function startNewGame() {
}