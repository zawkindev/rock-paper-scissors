function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 10);
  if (random_number < 3) {
    return "rock";
  } else if (random_number < 6) {
    return "paper";
  }
  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case computerSelection:
      return "draw";
    case "rock":
      return computerSelection == "paper" ? computerSelection : playerSelection;
    case "paper":
      return computerSelection == "scissors"
        ? computerSelection
        : playerSelection;
    case "scissors":
      return computerSelection == "rock" ? computerSelection : playerSelection;
  }
}

function game() {
  sum = 0;
  for (let round = 1; round <= 5; round++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      "What's your choice? rock, paper, scissors",
    ).toLowerCase();
    const winner = playRound(playerSelection, computerSelection);
    alert(
      winner == "draw"
        ? "Draw!!!"
        : `${winner} beats ${winner == playerSelection ? computerSelection : playerSelection
        }`,
    );
    winner == playerSelection ? sum++ : sum--;
  }
  alert(sum > 0 ? "You win!" : "You Lose!");
  if (sum == 0) {
    alert("Draw!");
  }
}

game();
