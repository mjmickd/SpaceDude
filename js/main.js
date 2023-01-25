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
 ;
 let answer = ""
 let mistakes = 0
 let wrongGuesses = []
 let wordStatus = null;
 let gameStatus 



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
  (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter) || WORDS.includes(leter) return));
  console.log(evt.target.textContent)
    const letter = evt.target.textContent
    if(secretWord.includes(ltr)){
      secretWord.forEach((char, idx) =>{
        if(char === ltr ) wordStatus[idx] = letter
      })
    } else {
   wrongGuesses.push(letter)   
  }
  render()
};

function init() {
  console.log("hello")
};

function render() {
guessedWord.txtContent = winner.join("")
spaceMan.src= 'img/spaceman-${wrongGuesses.jpg';
}

function render(){
  answerBoxEls.textContent = wordStatus.join('');
  spaceMan.src ='css/imgs/Lady-gaga-Meat-suit-${wrongGuesses.length}.jpg'
}
