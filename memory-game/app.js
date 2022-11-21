const grid = document.getElementById('grid')

var gridArray = [
    {
        name: 'hotdog',
        src: 'images/hotdog.png',
    },
    {
        name: 'pizza',
        src: 'images/pizza.png',
    },
    {
        name: 'fries',
        src : 'images/fries.png',
    },
    {
        name: 'ice-cream',
        src: 'images/ice-cream.png',
    },
    {
        name: 'chesseburger',
        src: 'images/cheeseburger.png',
    },
    {
       name: 'milkshake.png',
       src: 'images/milkshake.png', 
    },
    {
        name: 'hotdog',
        src: 'images/hotdog.png',
    },
    {
        name: 'pizza',
        src: 'images/pizza.png',
    },
    {
        name: 'fries',
        src : 'images/fries.png',
    },
    {
        name: 'ice-cream',
        src: 'images/ice-cream.png',
    },
    {
        name: 'chesseburger',
        src: 'images/cheeseburger.png',
    },
    {
       name: 'milkshake.png',
       src: 'images/milkshake.png', 
    }
];

gridArray.sort(() => 0.5 - Math.random())




const Grid = document.querySelector('#grid')
const resultDisplay = document.getElementById('scoreDisplay')
const count = document.getElementById('count')
const infoDisplay = document.getElementById('info')
const highScoreDisplay = document.getElementById('highScore')
let highScore
let countInfo = 0
const winAudio = new Audio('sounds/win.mp3')
const noMatchAudio = new Audio('sounds/not.mp3')
let cardChoosen = []
let cardChoosenIds = []
const cardsWon = []

//first createBoard() than we use and eventlisten to run the flipCard() when clicked
// we run a checkMatch() in a setTimout()



//the countDown fun
function countFun(){
    countInfo += 1
    count.innerHTML = countInfo + ' Sec'
}
var countInterval = setInterval(countFun, 1000)
// end of the countdown fun


// this code has to do with the high score
let highScoreGetItem = localStorage.getItem('highScore')
if(highScoreGetItem != undefined || highScoreGetItem != null){
    highScoreDisplay.innerHTML = " " + highScoreGetItem + " Sec"
}


if(highScoreGetItem == undefined || highScoreGetItem == null){
  highScore = localStorage.setItem('highScore', 100000)
}

//high score code ends here





function createBoard() {
   for(let i=0; i<gridArray.length; i++){
    const card = document.createElement('img')
     card.setAttribute('src', 'images/blank.png')
     card.setAttribute('data-id', i)
     Grid.appendChild(card)
     card.addEventListener('click', filpCards)
   }

}

createBoard()


//checkBoard() is called on the flipCard()
function checkMatch() {
    const card = document.querySelectorAll('#grid img')

    if(cardChoosen[0] == cardChoosen[1]){
        infoDisplay.innerHTML = 'You found a match' 
        card[cardChoosenIds[0]].setAttribute('src', 'images/white.png')
        card[cardChoosenIds[1]].setAttribute('src', 'images/white.png')
        card[cardChoosenIds[0]].removeEventListener('click', filpCards)
        card[cardChoosenIds[1]].removeEventListener('click', filpCards)
        cardsWon.push(cardChoosen)
        winAudio.play()
    }
    else{
        card[cardChoosenIds[0]].setAttribute('src', 'images/blank.png')
        card[cardChoosenIds[1]].setAttribute('src', 'images/blank.png')
        infoDisplay.innerHTML = 'Sorry they are not a match';
        noMatchAudio.play()
    }
    cardChoosen = []
    cardChoosenIds = []

    resultDisplay.textContent = cardsWon.length


    if(cardsWon.length == gridArray.length/2){
        resultDisplay.textContent = 'Hah you fliped all card...'

        //high score code here 
        let x = localStorage.getItem('highScore')
        if(countInfo < x){
            localStorage.setItem('highScore', countInfo)
            highScoreDisplay.innerHTML = " " + countInfo + " Sec"
            alert(" " + 'You made a new High Score of ' + countInfo)
        }
        //high score code ends here

        clearInterval(countInterval)
    }

}

function filpCards(){
    let cardId = this.getAttribute('data-id')
    cardChoosenIds.push(cardId)
    cardChoosen.push(gridArray[cardId].name) // this will push the nmae from the arry ck\licked using the data-id
    this.setAttribute('src', gridArray[cardId].src)
    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
   
}





