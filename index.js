function game() {
  let round = 1;
  let playerScore = 0;
  let computerScore = 0;
  const buttons = Array.from(document.querySelectorAll(".element-button"));
  const roundDisplay = document.querySelector(".round");
  const message = document.querySelector(".message");
  const playerHeartContainer = document.querySelector(".player-hearts");
  const computerHeartContainer = document.querySelector(".computer-hearts");

  function randomizeComputerElement() {
    const elements = ["fire", "earth", "water"];
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
  }

  function createHeart() {
    const heart = document.createElement("img");
    heart.src = "./images/heart.svg";
    heart.classList.add("heart");
    return heart;
  }

  function createBrokenHeart() {
    const brokenHeart = document.createElement("img");
    brokenHeart.src = "./images/broken-heart.svg";
    brokenHeart.classList.add("broken-heart");
    return brokenHeart;
  }

  function play(player, computer) {
    roundDisplay.textContent = `Round ${round}`;
    if (player === computer) {
      message.textContent = `You and your opponent have both received the blessings of the same element... Go again.`;
    } else if (
      (player === "fire" && computer === "earth") ||
      (player === "earth" && computer === "water") ||
      (player === "water" && computer === "fire")
    ) {
      if (playerScore === 0) {
        playerHeartContainer.appendChild(createHeart());
      } else if (playerScore < 5) {
        playerHeartContainer.insertBefore(
          createHeart(),
          playerHeartContainer.firstElementChild.nextSibling
        );
      }
      playerScore++;
      message.textContent = `You made a wise move! Your sacred element of ${player.toUpperCase()} destroyed your opponent's element of ${computer.toUpperCase()}.`;
    } else if (
      (player === "fire" && computer === "water") ||
      (player === "earth" && computer === "fire") ||
      (player === "water" && computer === "earth")
    ) {
      if (computerScore === 0) {
        computerHeartContainer.appendChild(createBrokenHeart());
      } else if (computerScore < 5) {
        computerHeartContainer.insertBefore(
          createBrokenHeart(),
          computerHeartContainer.firstElementChild.nextSibling
        );
      }
      computerScore++;
      message.textContent = `Poor soul... Your element of ${player.toUpperCase()} was defeated by your opponent's element of ${computer.toUpperCase()}. Wishing you better luck next time.`;
    }
    round++;
  }

  function resetGame() {
    const resetButton = document.createElement("button");
    const results = document.querySelector(".results");
    resetButton.classList.add("reset-button");
    resetButton.textContent = "Play Again";
    results.appendChild(resetButton);
    resetButton.addEventListener("click", function handleReset() {
      location.reload();
    });
  }

  function determineWinner() {
    const finalMessageDiv = document.createElement("div");
    finalMessageDiv.classList.add("final-message");
    const results = document.querySelector(".results");
    const buttonImages = document.querySelectorAll(".button-image");
    if (playerScore === 5) {
      const winMessage = document.createElement("div");
      winMessage.textContent = "You Survived!";
      results.appendChild(finalMessageDiv);
      finalMessageDiv.appendChild(winMessage);
      buttons.forEach((button) => {
        button.disabled = true;
        button.style.filter = "grayscale(90%)";
      });
      buttonImages.forEach((buttonImage) => {
        buttonImage.classList.remove("button-image-hover");
      });
      resetGame();
    } else if (computerScore === 5) {
      const lossMessage = document.createElement("div");
      lossMessage.textContent = `You did not survive...`;
      results.appendChild(finalMessageDiv);
      finalMessageDiv.appendChild(lossMessage);
      buttons.forEach((button) => {
        button.disabled = true;
        button.style.filter = "grayscale(90%)";
      });
      buttonImages.forEach((buttonImage) => {
        buttonImage.classList.remove("button-image-hover");
      });
      resetGame();
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function handleButton(e) {
      const player = e.target.classList[0];
      const computer = randomizeComputerElement();
      play(player, computer);
      determineWinner();
    });
  });
}

game();

// class Game {
//
//   addHeart() {}
//   endGame() {}
//   resetGame() {}
// }

// make the game Class flexible (i.e. do not hard code the elements or choices)
// other people using the class in their own environment should be able to feed in their own parameters
// and still be able to play the game
// fix the hard-coding of elements
