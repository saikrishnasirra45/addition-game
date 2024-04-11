let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function checkResult(){
    let isEqualTo = parseInt(firstNumberElement.textContent) + parseInt(secondNumberElement.textContent);
    let userInputNumber = parseInt(userInputElement.value);
    if (userInputElement === ""){
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
    else if (userInputNumber === isEqualTo){
        gameResultElement.textContent = "Congratulations you got it right!";
        gameResultElement.style.backgroundColor = "#028a0f";
    }
    else {
        gameResultElement.textContent = "Please Try Again";
        gameResultElement.style.backgroundColor = '#1e217c';
    }
}

function restartGame(){
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartGame();