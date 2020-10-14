// 8. Event

class App extends React.Component {

  handleButtonClick(){
    console.log('click')
  }

  render() {

    return (
      <div>
        <button onClick={this.handleButtonClick}>Send</button>
      </div>
    )
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM) 