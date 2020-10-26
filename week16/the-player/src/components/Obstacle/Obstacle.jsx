import React from 'react'
import './Obstacle.css';
export class Obstacle extends React.Component {
  render() {
    const obstacleStyle = {
      top: this.props.top,
      left: this.props.left
    }
    return (
      <div className="obstacle" style={obstacleStyle}></div>
    )
  }
}