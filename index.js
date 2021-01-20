// // game of five rounds
// function game() {
//   // one round of RPS game
//   function playRound(playerSelection, computerSelection) {
//     const choices = ["Rock", "Paper", "Scissors"];
//     const capPlayerSelection = `${playerSelection[0].toUpperCase()}${playerSelection
//       .substr(1)
//       .toLowerCase()}`;
//     if (choices.includes(capPlayerSelection)) {
//       if (capPlayerSelection === computerSelection) {
//         return `It's a Tie! You chose ${capPlayerSelection} and the computer also chose ${computerSelection}.`;
//       } else if (
//         (capPlayerSelection === "Rock" && computerSelection === "Paper") ||
//         (capPlayerSelection === "Paper" && computerSelection === "Scissors") ||
//         (capPlayerSelection === "Scissors" && computerSelection === "Rock")
//       ) {
//         computerScore++;
//         return `You Lose. You chose ${capPlayerSelection} and the computer chose ${computerSelection}.`;
//       } else if (
//         (capPlayerSelection === "Rock" && computerSelection === "Scissors") ||
//         (capPlayerSelection === "Paper" && computerSelection === "Rock") ||
//         (capPlayerSelection === "Scissors" && computerSelection === "Paper")
//       ) {
//         playerScore++;
//         return `You Win! You chose ${capPlayerSelection} and the computer chose ${computerSelection}.`;
//       }
//     } else {
//       return `Please choose either Rock, Paper, or Scissors.`;
//     }
//   }
//   let playerScore = 0;
//   let computerScore = 0;
//   // const playerSelection = window.prompt(
//   //   "Are you ready to play? Rock, Paper, or Scissors?"
//   // );
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));
//   if (playerScore > computerScore) {
//     return `You win!`;
//   } else if (playerScore < computerScore) {
//     return `You lose.`;
//   } else {
//     return `It's a tie.`;
//   }
// }

// console.log(game());

// I don't like how I'm playing a game inside of the chooseElement function
// although the purpose is to start the game as soon as the player clicks on the button
// can I add another event listener to the buttons in a different function? Yes

// store player's element selection for the game
function chooseElement() {
  let playerChoice = "";
  // add event listeners to the elements
  // the game starts when the element is selected by the player
  const fireButton = document.querySelector("#fire-button");
  fireButton.addEventListener("click", (e) => {
    playerChoice = "Fire";
    // console.log(computerChoice);
    // console.log(playerChoice);
    const computerChoice = randomizeComputerElement();
    console.log(playRound(playerChoice, computerChoice));
  });
  const grassButton = document.querySelector("#grass-button");
  grassButton.addEventListener("click", (e) => {
    playerChoice = "Grass";
  });
  const waterButton = document.querySelector("#water-button");
  waterButton.addEventListener("click", (e) => {
    playerChoice = "Water";
  });
  // return playerChoice;
}

chooseElement();

// randomize computer's element choice
function randomizeComputerElement() {
  const elements = ["Fire", "Grass", "Water"];
  const randomElement = elements[Math.floor(Math.random() * elements.length)];
  console.log(randomElement);
  return randomElement;
}

// one round of game logic
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log(
      `It's a Tie! You chose ${playerChoice} and the computer also chose ${computerChoice}.`
    );
  } else if (
    (playerChoice === "Fire" && computerChoice === "Grass") ||
    (playerChoice === "Grass" && computerChoice === "Water") ||
    (playerChoice === "Water" && computerChoice === "Fire")
  ) {
    // computerScore++;
    console.log(
      `You Win! You chose ${playerChoice} and the computer chose ${computerChoice}.`
    );
  } else if (
    (playerChoice === "Fire" && computerChoice === "Water") ||
    (playerChoice === "Grass" && computerChoice === "Fire") ||
    (playerChoice === "Water" && computerChoice === "Grass")
  ) {
    // playerScore++;
    console.log(
      `You Lose. You chose ${playerChoice} and the computer chose ${computerChoice}.`
    );
  }
}

// console.log(playRound(chooseElement(), randomizeComputerElement()));

// add hearts to the winning player until either one reaches 5 hearts
const playerHearts = document.querySelector(".player-hearts-container");

// display results after every round

// keep a history of rounds played

// display summary of results until Final Win
