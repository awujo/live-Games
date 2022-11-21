const scoreDisplay = document.getElementById('score')
const timeoutDisplay = document.getElementById('timeout')
const squares = document.querySelectorAll('.square')
let count2 = document.getElementById('countRange')//i am remove the countrange on my html page 
let speed = document.getElementById('speedRange')
const speedRangeDisplay = document.getElementById('speedRangeDisplay')
let hitPosition
let result = 0
let count = 60
let timerInterval
let speedValue 



function setup() {
    speed.addEventListener('change', () => {
        speedValue = speed.value
       speedRangeDisplay.innerHTML = Math.floor((speed.max - speed.value)/100)
    })
}

setup()


function randomPosition() {
    squares.forEach(square => {
       square.classList.remove('mole')
    })
    let randomSquares = squares[Math.floor(Math.random() * 9)]
    randomSquares.classList.add('mole')

    hitPosition = randomSquares.id
   
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
       if(square.id == hitPosition){
          result++
          scoreDisplay.innerHTML = result
          hitPosition = null
       }
    })
})

function timer(){
     timerInterval = setInterval(randomPosition, speedValue)
     setInterval(countDown,1000)
}

//timer()



function countDown() {
    if(count == 0){
        clearInterval(timerInterval)
       // alert('Game over. Correct clicks made ' + result + "clicks")
    }
    else{
        count--
        timeoutDisplay.innerHTML = count;
    }
}
