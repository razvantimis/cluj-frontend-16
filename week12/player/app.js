class Player {
  constructor(gameContainer){
    this.gameContainer = gameContainer;
  }

  /*
   Vream sa apara un div care va fi player in gameContainer
   Pentru inceput, il punem intr-un colt din container
   Div va avea pozitie absoluta si va ajucati cu x si y
  */
  createHtml(){
    
  }

  // eventul il inregistram pe window/document
  // verificare de keydown - folositi switch/ if else
  registerMoving(){
  }

  movePlayerHtml(){
    
  }

  // returneaza true sau false
  checkIfPlayerIsOutsideOfContainer(){

  }

}

const gameContainer = document.querySelector('#gameContainer');
const player1 = new Player(gameContainer)
