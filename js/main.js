  /*----- constants -----*/
const MAX_WRONG= 6
const WORDS =[
  "Edge of Glory", 
  "Bad Romance", 
  "Judas", 
  "Alejandro", 
  "Telephone", 
  "Applause", 
  "Paparrazi"
 ];
 const IMGS =[
"imgs/Lady-Gaga-Meat-Suit-0.png",
 "imgs/Lady-Gaga-Meat-Suit-1.png",
 "imgs/Lady-Gaga-Meat-Suit-2.png",
 "imgs/Lady-Gaga-Meat-Suit-3.png",
 "imgs/Lady-Gaga-Meat-Suit-4.png",
 "imgs/Lady-Gaga-Meat-Suit-5.png",
 "imgs/Lady-Gaga-Meat-Suit-6.png",
 ]
 
 
 /*----- state variables -----*/
 ;
 let answer = "";
 let wrongGuesses = [];
 let wordStatus = null;
 let gameStatus; 



  /*----- cached elements  -----*/
const guessedEL = document.getElementById('guessed-word');


//what stephanie said 
const messageEl = document.getElementById('message');
const wrongGuessesEl = document.getElementById('spotLight');
const playAgainEl = document.getElementById('playButton');
//const letter=[...document.getElementsById('letterButton')] 
const spaceDude = document.querySelector('img');
const letterButton = [...document.querySelectorAll('main > button')]
//const letterButtonEl = document.querySelectorAll('letterButton')

/*----- event listeners -----*/
document.querySelector("section").addEventListener("click", handleClick);
playAgainEl.addEventListener("click", init);

/*----- functions -----*/
//initialize all state, then call render()
init();

function init(){
secretWord = WORDS[Math.floor(Math.random() *WORDS.length)].toUpperCase('').split("");
wrongGuesses=[];
wordStatus = secretWord.map(ltr => ltr=== " " ? " " : "_");
gameStatus = null;
render();
};

function handleClick(evt){
  const ltr = evt.target.textContent
  if (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(ltr) 
    || gameStatus) return
  if(secretWord.includes(ltr)){
    secretWord.forEach(function(char, idx){
      if(char === ltr ) wordStatus[idx] = ltr
    })
  } else { 
    wrongGuesses.push(ltr)   
  }
  gameStatus = getGameStatus();
  render();
}

function getGameStatus(){
  if(!wordStatus.includes("_")) return "W";
  if(wrongGuesses.length >= MAX_WRONG) return "L";
  return null;
}


function render(){
  wrongGuessesEl.textContent = wordStatus.join(' ');
  spaceDude.src =`imgs/Lady-Gaga-Meat-Suit-${wrongGuesses.length}.png`;
  renderMessage()
}
//render button function 
//correct turn color, wrong turn color 
//declare render button function 
//iterate over our letter elements using forEach
//declaring a variable called letter = to the iterator .textContent
//conditional if statement - if wrong letters.includes(letter )
//className = wrong 
//else if answer.includes(letter ) = correct 
//else button.className = ""



function renderMessage(){
  if(gameStatus === "W") {
    messageEl.textContent = "YAAAS you win"
  }  else if (gameStatus === "L"){
    messageEl.textContent = `Sorry, Try again the answer was ${secretWord.join(" ")}`
  } else {
messageEl.textContent = `${MAX_WRONG - wrongGuesses.length} remain, good luck`
  }
}
render() 
  

//function renderButtonStyle () {
//letterButtons.forEach(function(btn){
  //const letter = btn.textContent;
  //if(wrongGuesses.includes(letter))){
   // btn.className = 'incorrect'
  //} else if (wordStatus.includes(letter)){
   // btn.className = correct
  //} else { btn.className = ' '}
//})
//}


