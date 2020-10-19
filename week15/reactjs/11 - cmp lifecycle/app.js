//12. Life cycle of components https://reactjs.org/docs/state-and-lifecycle.html
// Afisam o lista de posturi
// Sa putem filtra post-urile dupa titlu
function Post(props) {
  //  props.title = 'razvan' - asta nu se face
  return (
    <div className="single-post">
      {props.title ? (<h1>{props.title}</h1>) : ''}
      <p>{props.content}</p>
    </div>
  )
  // React.createElement(
  //   "div",
  //   {
  //     className: "single-post"
  //   },
  //   props.title ? /*#__PURE__*/ React.createElement("h1", null, props.title) : "",
  //   /*#__PURE__*/ React.createElement("p", null, props.content)
  // );
}


class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.posts = []
    for (let index = 0; index < this.props.numberOfPost; index++) {
      const post = {
        title: 'post ' + index,
        content: 'content '+ index
      }
      this.posts.push(post)
    }

    this.state = {
      filteredPosts: this.posts
    }
  }

  componentDidUpdate(prevProps, prevState){
    // prevProps - valorile care au fost inaite pe props
    // this.props - valorile curent
    // prevState - valorile care au fost inaite pe state
    // this.state - ce este acum pe state
    console.log('prevState.filteredPosts=', prevState.filteredPosts)
    console.log('this.state.filteredPosts=', this.state.filteredPosts)

  }

  componentDidMount(){
    console.log('dupa ce componenta nostra apare in UI/DOM')
    // un caz de utilizare - request-ul la server dupa data

  }

  componentWillUnmount(){
    console.log('inaite sa dispara de pe ecran')
    // un caz de utilizare ar fi curatarea din local storage
  }

  handleInputChangeValue = (event) => {
    // event este un obiect cu valori care descrie eventul facut de user
    // de pe event am luat valoare

    console.log('se cauta dupa =', event.target.value)
    const postFiltred = filterPost(event.target.value, this.posts);
    console.log('post-urile filtrare = ', postFiltred)
    this.setState({
      filteredPosts: postFiltred
    }, () => {
      // acest callback se executa dupa ce sa facut update cu sucess

    }) // setState este async function
    // nu neaparat dupa vom avea datele schimbate - this.state.filteredPosts
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChangeValue}></input>
        <h2>Lista posturi</h2>
        {this.state.filteredPosts.map(function (postData) {
          return (<Post title={postData.title /* = post 1 */} content={postData.content} />)
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
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(PostList, null) // new PostList()
    );
  }
}


const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)

// returnam un array cu post-urile filtrare
function filterPost(searchQuery, posts) {
  const postFiltred = [];
  // logica de filtrare
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    if (post.title.includes(searchQuery)) {
      postFiltred.push(post);
    }
  }
  return postFiltred;
}