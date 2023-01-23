  /*----- constants -----*/


  /*----- state variables -----*/
let letters; // an array of the letters available 
let turn; // player 1 or -1 
let words; //words of the game
[Judas, Paparrazi, Just Dance, Marry the Night, You and I, The Edge of Glory, Born this Way, Rain on Me ]
let gaga; // 6 tries for gaga 


  /*----- cached elements  -----*/
const pResultsEl = //the player results 
const cResultsEL = // the computer results aka the word they choose?
const 

  /*----- event listeners -----*/


  /*----- functions -----*/
  //initialize all state, then call render()
function init(){;
  
  letters = [
    [Q, W, E, R, T, Y, U, I, O, P] // column 0
    [A, S, D, F, G, H, J, K, L] // column 1
    [Z, X, C, V, B, N, M] //column 2
  ];
  turn = 1; //tell you whose turn it is 
  word = //this is going to be how you 
      //incorporate the word that you are guessing 
  gaga = //the images that will appear as you incorrectly guess   
  
  render();
}

  function render(){
    renderLetters(); //
    renderWord();
    renderGaga();
  }