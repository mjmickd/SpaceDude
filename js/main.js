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
  "//put your image tags here"
 ]


  /*----- state variables -----*/
let secretWord = '' //the word that AI picks 
let wrongLetters = 0; // an array of the letters available 
let guessedWord = []; // guessed word that the player is using 
let winner; //words of the game
let gameStatus;

//what stephanie said: 
//let answer: ""
//let mistakes = 0
//let guessed =[]
//let wordStatus = null;
//let gameStatus 

  /*----- cached elements  -----*/
const guessedEL = document.getElementById('guessed-word');

//what stephanie said 
//const message = document.getElementById('message')
//const guess = document.getElement('spotLight')
const letterButtons=[...document.querySelectorAll('section > button')]//see Diego's code in chat 
const playButton= document.getElementById('playButton')//this was original reset
//const spaceDude = document.querySelector('img');
  /*----- event listeners -----*/
document.querySelector("section").addEventListener("click", handleClick)
playButton.addEventListener("click", init)
  /*----- functions -----*/
  //initialize all state, then call render()

function init(){
secretWord = WORDS[Math.random() *WORDS.length].split("");
wrongGuesses=[]
wordStatus = secretWord.map(ltr===" " ? " " : "_")
gameStatus = null;
render()
};
init();
function handleClick(evt){
  console.log(evt.target)
};

function init() {
  console.log("hello")
};

function render() {
guessedWord.txtContent = winner.join("")
spaceMan.src= 'img/spaceman-${wrongGuesses.jpg';
}
  
