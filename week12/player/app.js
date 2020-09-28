class Player {
  constructor(gameContainer){
    this.gameContainer = gameContainer;
  }

}

const gameContainer = document.querySelector('#gameContainer');
const player1 = new Player(gameContainer)
