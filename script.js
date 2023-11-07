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
      return computerSelection == "scissors" ? computerSelection : playerSelection;
    case "scissors":
      return computerSelection == "rock" ? computerSelection : playerSelection;
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
