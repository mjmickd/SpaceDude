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
  "imgs/Lady-Gaga-Meat-Suit-0.jpeg",
 "imgs/Lady-Gaga-Meat-Suit-1.jpeg",
 "imgs/Lady-Gaga-Meat-Suit-2.jpeg",
 "imgs/Lady-Gaga-Meat-Suit-3.jpeg",
 "imgs/Lady-Gaga-Meat-Suit-4.jpeg",
 "imgs/Lady-Gaga-Meat-Suit-5.jpeg",
 "imgs/Lady-Gaga-Meat-Suit-6.jpeg",
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
const messageEl = document.getElementById('message')
const wrongGuessesEl = document.getElementById('spotLight')
//const letterButtons=[...document.querySelectorAll('section > button')]//see Diego's code in chat 
//const playButton= document.getElementById('playButton')//this was original reset
const spaceDude = document.querySelector('img');
/*----- event listeners -----*/
document.querySelector("section").addEventListener("click", handleClick)


/*----- functions -----*/
//initialize all state, then call render()
init();

  function init(){
  secretWord = WORDS[Math.floor(Math.random() *WORDS.length)].toUpperCase('').split("");
  wrongGuesses=[]
  wordStatus = secretWord.map(ltr => ltr===" " ? " " : "_")
  gameStatus = null;
  console.log (secretWord, 'secret')
  console.log(wordStatus, "Word Status")
  render()
  };

function handleClick(evt){
 const ltr = evt.target.textContent
  if (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(ltr)) return
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



function render(){
  wrongGuessesEl.textContent = wordStatus.join('');
  spaceDude.src =`imgs/Lady-Gaga-Meat-Suit-${wrongGuesses.length}.jpeg`
  renderMessage()
}

function getGameStatus(){
  if(!wordStatus.includes("_")) return "W";
  if(wrongGuesses.length >= MAX_WRONG) return "L";
  return null;
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
    messageEl.textContent = `Sorry, Try again the answer was ${secretWord.join("")}`
  } else {
messageEl.textContent = `${MAX_WRONG - wrongGuesses.length} remain, good luck`
  }
}

render() 
  


