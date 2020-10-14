// 8. Event

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  handleButtonClick = () => {
    console.log('click')

    const counter = this.state.counter + 1;
    this.setState({
      counter: counter
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.handleButtonClick}>Increment</button>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM) 