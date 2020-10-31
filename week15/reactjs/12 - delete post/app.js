
function Post(props) {
  return (
    <div className="single-post">
      {props.title ? (<h1>{props.title}</h1>) : ''}
      <p>{props.content}</p>
      <button onClick={props.onDeletePost}>Delete</button>
    </div>
  )
}

class PostList extends React.Component {
  constructor(props) {
    super(props);

    const posts = []
    for (let index = 0; index < this.props.numberOfPost; index++) {
      const post = {
        id: index,
        title: 'post ' + index,
        content: 'content ' + index
      }
      posts.push(post)
    }

    this.state = {
      posts: posts
    }
  }

  deletePost(postId) {
    console.log('sterge un post = ', postId)
    // 1. Sa stergem si pe server iar daca sa sters cu succes
   
    // 2. Stergem postul din this.state.posts - stergere locala
    const posts = this.state.posts.filter(post => post.id !== postId);
    this.setState({
      posts: posts
    })
  }


  render() {
    // this 
    return (
      <div>
        <h2>Lista posturi</h2>
        {this.state.posts.map((postData) => {
          return (<Post
            title={postData.title /* = post 1 */}
            content={postData.content}
            onDeletePost={() => {
              this.deletePost(postData.id)
            }}
          />
          )
        })}
      </div>
    )
  }
}


class App extends React.Component {

  render() {
    return (
      <div>
        <PostList numberOfPost={100} />
      </div>
    )
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)
