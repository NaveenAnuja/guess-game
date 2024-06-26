let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

        function checkGuess() {
            let userGuess = document.getElementById('guessInput').value;
            let message = document.getElementById('message');
            
            let attempts = 3;

              
            if (userGuess == randomNumber) {
                message.textContent = "Congratulations! You win the game.";
                message.style.color = "green";
            } else if (userGuess < randomNumber) {
                message.textContent = "Too low! Try again.";
                message.style.color = "red";
            } else if (userGuess > randomNumber) {
                message.textContent = "Too high! Try again.";
                message.style.color = "red";
            }
            
            attempts--;
        

        if(attempts==0){
            message.textContent = "Your chances are over.Please Refesh and Replay game..!";
            message.style.color = "green";
        }
    }
        