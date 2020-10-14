// 6. Use Class for create a component

function PostComponent(props) {

  return (
    <div className="single-post">
      {props.title ? (<h1>{props.title}</h1>) : ''}
      <p>{props.content}</p>
    </div>
  )
}

// function PostList() {
//   return (
//     <div>
//       <h2>Lista posturi</h2>
//       <PostComponent title={'Post 1'} content={'Post Content 1'} abc={1} />
//       <PostComponent title={'Post 2'} content={'Post Content 2'} />
//       <PostComponent title={'Post 3'} content={'Post Content 3'} />
//     </div>
//   )
// }

class PostList extends React.Component {

  render() {
    return (
      <div>
        <h2>Lista posturi</h2>
        <PostComponent title={'Post 1'} content={'Post Content 1'} />
        <PostComponent content={'Post Content 2'} />
        <PostComponent title={'Post 3'} content={'Post Content 3'} />
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    const isLoading = false;
    if (isLoading) {
      return (<div>Post loading....</div>)
    } else {
      return (
        <div>
          <PostList />
        </div>
      )
    }
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM) 