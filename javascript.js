game();

function game() {
    let winTimes = 0;
    let loseTimes = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, scissor, or paper?");
        if (playerSelection.match("(rock)|(scissor)|(paper)")) {
            const computerSelection = getComputerChoice();
            const outcomeMessage = playRound(playerSelection, computerSelection);
            console.log(outcomeMessage);
            if (outcomeMessage.includes("win")) {
                winTimes++;
            } else if(outcomeMessage.includes("lose")) {
                loseTimes++;
            }
        } else {
            alert("input format isn't right!")
        }
    }
    outcomeCalculater(winTimes, loseTimes);
}

function outcomeCalculater(winTimes, loseTimes) {
    alert(winTimes > loseTimes ? "You win the bo5!" : winTimes < loseTimes ? "You lose the bo5!" : "We are tied!")
}

function getComputerChoice() {
    const randomOutcome = Math.random() * 3;
    return randomOutcome >= 2 ? `rock` : randomOutcome >= 1 ? 'scissor' : 'paper'; 
}

function playRound(playerSelection, computerSelection) {
    let returnString = ''; 
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    returnString = `You both came to a tie.`
                    break;
                case "scissor":
                    returnString = `You win! ${playerSelection} beats ${computerSelection}`
                    break;
                case "paper":
                    returnString = `You lose! ${computerSelection} beats ${playerSelection}`
                    break;
            }
            break;
        case "scissor":
            switch(computerSelection) {
                case "scissor":
                    returnString = `You both came to a tie.`
                    break;
                case "paper":
                    returnString = `You win! ${playerSelection} beats ${computerSelection}`
                    break;
                case "rock":
                    returnString = `You lose! ${computerSelection} beats ${playerSelection}`
                    break;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "paper":
                    returnString = `You both came to a tie.`
                    break;
                case "rock":
                    returnString = `You win! ${playerSelection} beats ${computerSelection}`
                    break;
                case "scissor":
                    returnString = `You lose! ${computerSelection} beats ${playerSelection}`
                    break;
            }
            break;
    }
    return returnString;
}

/* First, we need a input box and following button for submission
when user type to the input box
type rock, paper, and scissor string, 

the input string should be send to console

the console should responde to the input
answer a random rock, paper, and scissor and the outcome*/