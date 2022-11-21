const computerReading = document.getElementById('computerChoiceDisplay')
const userReading = document.getElementById('userChoiceDisplay')
const resultReading = document.getElementById('resultDisplay')
const countReading = document.getElementById('countInfo')
const choice = document.querySelectorAll('.button-choices')
let userChoice
let computerGen
let buttonRemove = document.getElementById('button-id')
let score = document.getElementById('scoreDisplay')
let scoreGet = 0
//let scoreSheet = localStorage.setItem('win', 0)
//let scoreGet = parseInt(localStorage.getItem('win'))
//computer score lets
let computerScore = document.getElementById('computerScoreDisplay')
//let computerScoreSheet = localStorage.setItem('computerWin', 0)
//let computerScoreGet = parseInt(localStorage.getItem('computerWin'))
let computerScoreGet = 0
let resetBtnId = document.getElementById('resetBtn')

const winSound = new Audio('sounds/win.mp3')
const lostSound = new Audio('sounds/not.mp3')
const drawSound = new Audio('sounds/tada.mp3')
const rockPaperScissorSound = new Audio('sounds/rockPaperScissor.m4a')

let pointToWin = document.getElementById('pointToWin')
let pointToWInStorage
let pointToWinValueGet




pointToWin.value = 10


//user click buuton to display 
choice.forEach(choice => choice.addEventListener('click', (e) => {setTimeout(() => {
    userChoice = e.target.id
    if(userChoice === 'rock-id') {
        userReading.innerHTML = 'Rock'
    }
    if(userChoice === 'paper-id') {
        userReading.innerHTML = 'Paper'
    }
    if(userChoice === 'scissor-id') {
        userReading.innerHTML = 'Scissor'
    }
    computerChoice();
    scoreRun();
    result();
    scoreAppending()
    pointToWinFun()
}, 5000);


//function for the count nested inside the (e) function

   
   //to remove button when running
   buttonRemove.style.display = 'none';

    //for the clearing of the option
    computerReading.innerHTML = '';
    userReading.innerHTML = '';
    resultReading.innerHTML = '';

  //for the sudio sound
  
  rockPaperScissorSound.play();
    //for rock
    setTimeout(() => {
     countReading.innerHTML = 'ROCK!!!';
    }, 1000);
    //for paper
    setTimeout(() => {
        countReading.innerHTML = 'PAPER!!!';
       }, 2000);
    //for scissor
    setTimeout(() => {
        countReading.innerHTML = 'SCISSOR!!!';
       }, 3000);
    //for default clear
    setTimeout(() => {
        countReading.innerHTML = '';
       }, 4000);
    setTimeout(() => {
      buttonRemove.style.display = 'block';
    }, 5000);
}
));

/*
choice.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if(userChoice === 'rock-id') {
        userReading.innerHTML = 'Rock'
    }
    if(userChoice === 'paper-id') {
        userReading.innerHTML = 'Paper'
    }
    if(userChoice === 'scissor-id') {
        userReading.innerHTML = 'Scissor'
    }
    computerChoice();
    result();
})); */

//fuction for computer choices
function computerChoice() {
    computerGen = Math.floor(Math.random() * 3) + 1 ;
   if(computerGen === 1) {
    computerReading.innerHTML = ' Rock';
   }
   if(computerGen === 2) {
    computerReading.innerHTML = ' Paper';
   }
   if(computerGen === 3) {
    computerReading.innerHTML = ' Scissor';
   }
}

//function for result 
function result() {
  if(userChoice === 'paper-id'  && computerGen === 2) {
    resultReading.innerHTML = 'Draw';
    localStorage.setItem('win', scoreGet += 1);
    localStorage.setItem('computerWin', computerScoreGet += 1);
    drawSound.play();
  }
  if(userChoice === 'rock-id'  && computerGen === 1) {
    resultReading.innerHTML = 'Draw';
    localStorage.setItem('win', scoreGet += 1);
    localStorage.setItem('computerWin', computerScoreGet += 1);
    drawSound.play();
  }
  if(userChoice === 'scissor-id'  && computerGen === 3) {
    resultReading.innerHTML = 'Draw';
    localStorage.setItem('win', scoreGet += 1);
    localStorage.setItem('computerWin', computerScoreGet += 1);
    drawSound.play();
  }
  if(userChoice === 'scissor-id'  && computerGen === 2) {
    resultReading.innerHTML = 'Won';
    localStorage.setItem('win', scoreGet += 3);
    winSound.play();
  }
  if(userChoice === 'scissor-id'  && computerGen === 1) {
    resultReading.innerHTML = 'Lost';
    //localStorage.setItem('win', scoreGet -= 1);
    localStorage.setItem('computerWin', computerScoreGet += 3);
    lostSound.play();
  }
  if(userChoice === 'rock-id'  && computerGen === 2) {
    resultReading.innerHTML = 'Lost';
    //localStorage.setItem('win', scoreGet -= 1);
    localStorage.setItem('computerWin', computerScoreGet += 3);
    lostSound.play();
  }
  if(userChoice === 'rock-id'  && computerGen === 3) {
    resultReading.innerHTML = 'Won';
    localStorage.setItem('win', scoreGet += 3);
    winSound.play();
  }
  if(userChoice === 'paper-id'  && computerGen === 3) {
    resultReading.innerHTML = 'Lost';
    //localStorage.setItem('win', scoreGet -= 1);
    localStorage.setItem('computerWin', computerScoreGet += 3);
    lostSound.play();
  }
  if(userChoice === 'paper-id'  && computerGen === 1) {
    resultReading.innerHTML = 'Won';
    localStorage.setItem('win', scoreGet += 3);
    winSound.play();
  }
}



function scoreRun() {
  scoreGet = parseInt(localStorage.getItem('win'));
  computerScoreGet = parseInt(localStorage.getItem('computerWin'));
}

function scoreAppending() {
  score.innerHTML = localStorage.getItem('win');
  computerScore.innerHTML = localStorage.getItem('computerWin');
}

scoreAppending()


 

//resetBtnFun() resets all values when there is a winner
function resetBtnFun() {
  scoreGet = 0
  computerScoreGet = 0
  parseInt(localStorage.setItem('win', 0))
  parseInt(localStorage.setItem('computerWin', 0))
  score.innerHTML = 0
  computerScore.innerHTML = 0
  pointToWin.value = "";
}


//code for the storage of the value before reloading....
resetBtnId.addEventListener('click', () => {
  scoreGet = 0
  computerScoreGet = 0
  parseInt(localStorage.setItem('win', 0))
  parseInt(localStorage.setItem('computerWin', 0))
  score.innerHTML = 0
  computerScore.innerHTML = 0
  pointToWin.value = 0
})
 

function setPointValue() {
  if(pointToWin.value === ""){
    pointToWin.value = pointToWinValueGet
  }
  

}


function pointToWinFun() {
  pointToWin.addEventListener("change", () => {
   

  
    

   /* if(pointToWin.value.length <= 4 && pointToWin.value.length >= 1 ){
    }else {
      pointToWin.setAttribute('point','disable')
    }*/
  });
  alert(pointToWinValueGet)
   pointToWInStorage = localStorage.setItem('point', pointToWin.value)
   pointToWinValueGet = localStorage.getItem('point')



  //() => {
    //function scoreCheckFun() {
    if(scoreGet >= pointToWinValueGet) {
      countReading.innerHTML = 'User is the Final Winner';
      setTimeout(() => {
        resetBtnFun()
      }, 1500);
    }
    if(computerScoreGet >= pointToWinValueGet) {
      countReading.innerHTML = 'Computer is the Final Winner';
      setTimeout(() => {
        resetBtnFun()
      }, 1500);
    }
    if(scoreGet >= pointToWinValueGet && computerScoreGet >= pointToWinValueGet) {
      countReading.innerHTML = 'It is a Final Draw. Increase Winner Point to continue if you wish to';
    }
 // }
 // scoreCheckFun()
}













