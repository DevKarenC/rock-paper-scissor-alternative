// randomly return either Rock, Paper, or Scissors
// function computerPlay() {
//   const choices = ["Rock", "Paper", "Scissors"];
//   const randomChoice = choices[Math.floor(Math.random() * choices.length)];
//   return randomChoice;
// }

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

// add event listeners to the element buttons
const fireButton = document.querySelector("#fire-button");
fireButton.addEventListener("click", (e) => {
  console.log(e.target);
});

const grassButton = document.querySelector("#grass-button");
const waterButton = document.querySelector("#water-button");
