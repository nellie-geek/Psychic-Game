    // Creates an array that lists out all of the letters.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // Creating variables to hold the number of wins and losses. 
    var wins = 0;
    var losses = 0;
    var guesses = 12; 
    var guessedSoFar = [];
    //At page load values do not display/only a single letter is being displayed onkeyup event//
    
    // Create variables to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");
    var guessedSoFarText = document.getElementById("key");

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Key function.
    document.onkeyup = function (event) {  

        // Determines which key was pressed.
        var userGuess = event.key;
        guessedSoFar.push(userGuess);
        document.getElementById("key").textContent = userGuess;
            
        // Game logic and scoring.
        if (userGuess === computerGuess) {
            wins++;
            guesses = 12;

        } else {
            guesses--;
            
        } if (guesses === 0) {
            losses++;
            guesses = 12;
        }
       
        // Display the user and score.
        guessedSoFarText.textContent = userGuess;
        guessesText.textContent = "Guesses remaining: " + guesses;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
    };
