class Player extends React.Component {
  render() {
    const stylePlayer = {
      top: this.props.top,
      left: this.props.left
    }

    return (
      <div className="player" style={stylePlayer}></div>
    )
  }

  static getPlayerSize(){
    const playerDiv = document.querySelector('.player');
    const playerStyle = getComputedStyle(playerDiv);

    return {
      width: parseInt(playerStyle.width),
      height: parseInt(playerStyle.height),
    }
  }
}
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      top: 0,
      left: 0
    }
  }

  componentDidMount() {
    // se apeleaza dupa ce sa afisat componenta pe ecran
    document.addEventListener("keydown", (event) => {
      this.movePlayer(event)
    });
  }

  movePlayer(event) {
    // 1. Variabile cu nextTop si nextLeft
    let nextTop = this.state.top; //initializam nextTop cu valoarea lui din this.state
    let nextLeft = this.state.left;
    // 2. Facem update dupa logica de key la variabila nextTop/nextLeft
    if (event.code == "ArrowUp") {
      nextTop = nextTop - 20;
    } else if (event.code == "ArrowLeft") {
      nextLeft = nextLeft - 20;
    } else if (event.code == "ArrowDown") {
      nextTop = nextTop + 20;
    } else if (event.code == "ArrowRight") {
      nextLeft = nextLeft + 20;
    }

    // 3. Setam noile valori pe state - this.setState
    // Facem verificam
    const isInValidMove = this.isPlayerOutsideOfGameArea(nextTop, nextLeft)
    if (!isInValidMove) {
      this.setState({
        top: nextTop,
        left: nextLeft
      });
    }
  }

  // Returnam true daca player este inafara
  // false daca este in interior
  isPlayerOutsideOfGameArea(top, left) {
    const gameAeraSize = Game.getGameAeraSize();
    const playerSize = Player.getPlayerSize();

    if (
      top < 0 ||
      top > gameAeraSize.height - playerSize.height ||
      left < 0 ||
      left > gameAeraSize.width - playerSize.width
    ) {
      return true;
    } else {
      return false;
    }
  }

  static getGameAeraSize() {
    const gameAeraDiv = document.querySelector('.game-area')
    const gameAeraStyle = getComputedStyle(gameAeraDiv)

    return {
      width: parseInt(gameAeraStyle.width),
      height: parseInt(gameAeraStyle.height),
    }
  }

  render() {
    return (
      <div className="game-area">
        <Player top={this.state.top} left={this.state.left} />
      </div>
    )
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<Game />, appDOM)
