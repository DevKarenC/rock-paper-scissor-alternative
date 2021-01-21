class Game {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.playerChoice = "";
    this.computerChoice = "";
    this.fireButton = document.querySelector("#fire-button");
    this.earthButton = document.querySelector("#earth-button");
    this.waterButton = document.querySelector("#water-button");
  }
  randomizeComputerElement() {
    const elements = ["Fire", "Earth", "Water"];
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    this.computerChoice = randomElement;
    console.log(this.computerChoice);
  }
  choosePlayerElement() {
    this.fireButton.addEventListener("click", (e) => {
      this.playerChoice = "Fire";
      console.log(this.playerChoice);
      this.randomizeComputerElement();
      this.determineWinner();
    });
    this.earthButton.addEventListener("click", (e) => {
      this.playerChoice = "Earth";
      console.log(this.playerChoice);
      this.randomizeComputerElement();
      this.determineWinner();
    });
    this.waterButton.addEventListener("click", (e) => {
      this.playerChoice = "Water";
      console.log(this.playerChoice);
      this.randomizeComputerElement();
      this.determineWinner();
    });
  }
  determineWinner() {
    if (this.playerChoice === this.computerChoice) {
      console.log(
        `It's a Tie! You chose ${this.playerChoice} and your opponent also chose ${this.computerChoice}.`
      );
    } else if (
      (this.playerChoice === "Fire" && this.computerChoice === "Earth") ||
      (this.playerChoice === "Earth" && this.computerChoice === "Water") ||
      (this.playerChoice === "Water" && this.computerChoice === "Fire")
    ) {
      this.computerScore++;
      console.log(this.computerScore);
      console.log(
        `You Win! You chose ${this.playerChoice} and your opponent chose ${this.computerChoice}.`
      );
    } else if (
      (this.playerChoice === "Fire" && this.computerChoice === "Water") ||
      (this.playerChoice === "Earth" && this.computerChoice === "Fire") ||
      (this.playerChoice === "Water" && this.computerChoice === "Earth")
    ) {
      this.playerScore++;
      console.log(this.playerScore);
      console.log(
        `You Lose. You chose ${this.playerChoice} and your opponent chose ${this.computerChoice}.`
      );
    }
  }
  playRound() {}
  displayResult() {}
  addHeart() {}
  endGame() {}
  resetGame() {}
}

let testGame = new Game();
testGame.choosePlayerElement();

// make the game Class flexible (i.e. do not hard code the elements or choices)
// other people using the class in their own environment should be able to feed in their own parameters
// and still be able to play the game
// fix the hard-coding of elements
