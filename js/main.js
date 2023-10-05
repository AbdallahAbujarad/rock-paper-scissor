// Buttons Vars
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let btns = document.getElementsByClassName('choice');
let playAgain = document.querySelector('.buttons .play');
let resetScore = document.querySelector('.buttons .reset');
let computerTurn = document.querySelector('.computer .computer-turn img')
let playerTurn = document.querySelector('.person .player-turn img');
let playerTurnDiv = document.querySelector('.person .player-turn');
let textResult = document.querySelector('.container .text-result');
let rockSrc = 'imgs/stone.png';
let paperSrc = 'imgs/file.png';
let scissorSrc = 'imgs/scissor.png';

// Score Vars
let playerScore = document.querySelector('.result .player .score');
let computerScore = document.querySelector('.result .computer .score');
let playerScoreValue = 0;
let computerScoreValue = 0;

// Functions
function returnRegular() {
    rock.style.height = '25%';
    paper.style.height = '25%';
    scissors.style.height = '25%';
    Array.from(btns).forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.height = '30%';
        });
        button.addEventListener('mouseout', () => {
            button.style.height = '25%';
        });
    });
    rock.style.transform = 'none';
    paper.style.transform = 'none';
    scissors.style.transform = 'none';
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    playerTurnDiv.style.display = 'none';
    computerTurn.src = '';
    textResult.innerText = 'Play';
}

function playerTurne(src) {
    playerTurnDiv.style.cssText = `
        align-self: center;
        transform: translateY(68%);
        height: 47%;
        display: block;
    `;
}

function updateScores(playerChoice, computerChoice) {
    playerTurn.src = playerChoice;
    computerTurn.src = computerChoice;
    
    setTimeout(() => {
        if (computerChoice === paperSrc && playerChoice === rockSrc || computerChoice === rockSrc && playerChoice === scissorSrc || computerChoice === scissorSrc && playerChoice === paperSrc) {
            computerScoreValue += 1;
            textResult.innerText = 'Win';
        } else if (playerChoice === paperSrc && computerChoice === rockSrc || playerChoice === rockSrc && computerChoice === scissorSrc || playerChoice === scissorSrc && computerChoice === paperSrc) {
            playerScoreValue += 1;
            textResult.innerText = 'Lose';
        } else {
            textResult.innerText = 'Draw';
        }
        playerScore.innerText = playerScoreValue;
        computerScore.innerText = computerScoreValue;
    }, 100);
}

function setComputerChoice() {
    let choices = [rockSrc, paperSrc, scissorSrc];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// The Game Actual Code
rock.addEventListener('click', () => {
    rock.style.display = 'none'
    paper.style.display = 'none';
    scissors.style.display = 'none';
    playerTurne(rockSrc);
    let computerChoice = setComputerChoice();
    updateScores(rockSrc, computerChoice);
});

paper.addEventListener('click', () => {
    paper.style.display = 'none';
    rock.style.display = 'none';
    scissors.style.display = 'none';
    playerTurne(paperSrc);
    let computerChoice = setComputerChoice();
    updateScores(paperSrc, computerChoice);
});

scissors.addEventListener('click', () => {
    scissors.style.display = 'none'
    paper.style.display = 'none';
    rock.style.display = 'none';
    playerTurne(scissorSrc);
    let computerChoice = setComputerChoice();
    updateScores(scissorSrc, computerChoice);
});

playAgain.addEventListener('click', returnRegular);
resetScore.addEventListener('click', _ => {
    returnRegular();
    playerScoreValue = 0;
    computerScoreValue = 0;
    playerScore.innerText = '0';
    computerScore.innerText = '0';
});
