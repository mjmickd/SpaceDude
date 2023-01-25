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
 "css/imgs/Lady gaga Meat Suit 0 Small Medium.jpeg",
 "css/imgs/Lady gaga Meat Suit 1 Small Medium.jpeg",
 "css/imgs/Lady gaga Meat Suit 2 Medium.jpeg",
 "css/imgs/Lady gaga Meat Suit 3 Medium.jpeg",
 "css/imgs/Lady gaga Meat Suit 4 Medium.jpeg",
 "css/imgs/Lady gaga Meat Suit 5 Medium.jpeg",
 "css/imgs/Lady Gaga Meat Suit OG  Medium.jpeg",
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
const wrongGuess = document.getElement('spotLight')
//const letterButtons=[...document.querySelectorAll('section > button')]//see Diego's code in chat 
//const playButton= document.getElementById('playButton')//this was original reset
//const spaceDude = document.querySelector('img');
  /*----- event listeners -----*/
  function init(){
  secretWord = WORDS[Math.random() *WORDS.length].split("");
  wrongGuesses=[]
  wordStatus = secretWord.map(ltr===" " ? " " : "_")
  gameStatus = null;
  render()
  };
  
document.querySelector("section").addEventListener("click", handleClick)
playButton.addEventListener("click", init)
  /*----- functions -----*/
  //initialize all state, then call render()
function showImage0(){
  document.getElementById
}


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
