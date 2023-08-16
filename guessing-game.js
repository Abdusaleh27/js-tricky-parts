function guessingGame() {
  let random = Math.random() * 100;
  let numOfGuesses = 0;
  let gameOver = false;
  return function (guess) {
    if(gameOver) return "The game is over, you already won!"
    numOfGuesses++;
    if (guess > random) {
      return `${guess} is too high!`;
    } else if (guess < random) {
      return `${guess} is too low!`;
    }
    gameOver = true;
    return `You win! You found ${guess} in ${numOfGuesses} guesses.`;
  };
}

module.exports = { guessingGame };
