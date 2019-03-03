    // Creates an array that lists out all of the letters.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // Creating variables to hold the number of wins and losses. 
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 10;
    
    // Create variables to display things.
    var guessesRemainingText = document.getElementById("guessesRemaining-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessedSoFarText = document.getElementById("guessedsofar");
    
    // Key function.
    document.onkeyup = function (event) {
    
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log = event;
        
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        // Game logic and scoring.
        if (userGuess === computerGuess) {
                wins++;
        } else if (userGuess !== computerChoices) {
            guessesRemaining--;
        } else {
            losses++;
            guessesRemainingText = 10;
            guessedSoFarText = "";
        }
            
        // Display the user and score.
        userGuess.textContent = "guessedsofar" + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
    };
