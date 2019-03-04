    // Creates an array that lists out all of the letters.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // Creating variables to hold the number of wins and losses. 
    var wins = 0;
    var losses = 0;
    var guessesleft = 10; //Guesses does not display or start at designated value
    var guessedSoFar = [];
    
    // Create variables to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var guessedSoFarText = document.getElementById("guessedsofar-text");
    var userText = document.getElementById("usertext");


    

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
            guessesleft = 10;

        } else {
            guessesleft--;
        
        } if (guessesleft === 0) {
            losses++;
            guessesleft = 10;
        }

            
        // Display the user and score.
        userGuess.textContent = "guessedsofar" + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
    };
