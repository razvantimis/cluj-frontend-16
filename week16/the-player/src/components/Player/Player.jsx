import React from 'react'
import './Player.css';

export class Player extends React.Component {
  render() {
    const stylePlayer = {
      top: this.props.top,
      left: this.props.left
    }

    return (
      <div className="player" style={stylePlayer}></div>
    )
  }

  static getPlayerSize() {
    const playerDiv = document.querySelector('.player');
    const playerStyle = getComputedStyle(playerDiv);

    return {
      width: parseInt(playerStyle.width),
      height: parseInt(playerStyle.height),
    }
  }
}
