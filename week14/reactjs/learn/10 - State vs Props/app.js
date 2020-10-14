//10. State vs props https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props

function Post(props) {

  return (
    <div className="single-post">
      {props.title ? (<h1>{props.title}</h1>) : ''}
      <p>{props.content}</p>
    </div>
  )
}

class PostList extends React.Component {
  handleInputChangeValue = () => {
    console.log('change')
  }
  
  render() {
    const posts = [
      { title: 'post 1', content: 'post content 1' },
      { title: 'post 2', content: 'post content 2' },
      { title: 'post 3', content: 'post content 3' },
      { title: 'post 4', content: 'post content 4' },
      { title: 'post 5', content: 'post content 5' },
    ]
    return (
      <div>
        <input onChange={this.handleInputChangeValue}></input>
        <h2>Lista posturi</h2>
        {posts.map(postData => (<Post title={postData.title} content={postData.content} />))}
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <PostList />
      </div>
    )
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM) 