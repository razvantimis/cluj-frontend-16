// 1. Hello word ( ReactJs vs DOM) https://reactjs.org/docs/add-react-to-a-website.html

// version DOM

// const helloDOM = document.createElement('div');
// helloDOM.innerText = "Hello word"

// const appDOM = document.getElementById('app');
// appDOM.appendChild(helloDOM);

// version reactjs

const HelloComponent = React.createElement('div', null, 'Hello word') // nu folosesc document.createElement

const appDOM = document.getElementById('app');
ReactDOM.render(HelloComponent, appDOM) // document.createElement
