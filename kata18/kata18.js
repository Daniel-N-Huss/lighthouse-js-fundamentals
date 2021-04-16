let prompt = require("prompt-sync")();

const randomGen = function () {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const guessingGame = function () {
  const randomInt = randomGen();
  let guess = undefined;
  const guesses = [];

  while (Number(guess) !== randomInt) {
    console.log(randomInt);
    guess = Number(prompt("Guess a number between 1 and 100: "));

    if (guess < randomInt) {
      guesses.push(guess);
      console.log('Too low! Try higher');
    } else if (guess > randomInt) {
      guesses.push(guess);
      console.log('Too high! Try a lower number');
    } else if (isNaN(guess)) {
      console.log('Not a number! Please try again.');
    }
  }

  guesses.push(Number(guess));

  guesses.sort((a, b) => a - b)

  const count = guesses.filter((number, index) => number !== guesses[index + 1]).length

  console.log(`That's right! You took ${count} guesses to find the right number. Thanks for playing!`)
};

guessingGame();