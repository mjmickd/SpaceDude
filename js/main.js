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
 "imgs/Lady gaga Meat Suit 0 Small Medium.jpeg",
 "imgs/Lady gaga Meat Suit 1 Small Medium.jpeg",
 "imgs/Lady gaga Meat Suit 2 Medium.jpeg",
 "imgs/Lady gaga Meat Suit 3 Medium.jpeg",
 "imgs/Lady gaga Meat Suit 4 Medium.jpeg",
 "imgs/Lady gaga Meat Suit 5 Medium.jpeg",
 "imgs/Lady Gaga Meat Suit OG  Medium.jpeg",
 ]
 
 
 /*----- state variables -----*/
 ;
 let answer = ""
 let wrongGuess = []
 let wordStatus = null;
 let gameStatus 



  /*----- cached elements  -----*/
const guessedEL = document.getElementById('guessed-word');

//what stephanie said 
const message = document.getElementById('message')
const wrongGuesses = document.getElement('spotLight')
//const letterButtons=[...document.querySelectorAll('section > button')]//see Diego's code in chat 
//const playButton= document.getElementById('playButton')//this was original reset
//const spaceDude = document.querySelector('img');
  /*----- event listeners -----*/
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

document.querySelector("section").addEventListener("click", handleClick)
playButton.addEventListener("click", init)
  /*----- functions -----*/
  //initialize all state, then call render()
function showImage0(){
  document.getElementById
}

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
  render();
  }



function render(){
  wordGuess.textContent = wordStatus.join('');
  spaceMan.src ='css/imgs/Lady-gaga-Meat-Suit${wrongGuesses.length}.jpg'
}

fuction 


render(){
  
}

// what I found online for a dash function - don't know if it is correct //

//function render() { 
//for (i = 0; i < chosenWord.length; i++) {
  //if (chosenWord.charAt(i) == " ") {
  //  dashes += " ";
  //} else {
  //  dashes += "-";
  //}
//}
//}


// function render(){
  spaceman.src = '' 
