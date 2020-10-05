class Post {
  constructor(title, text, id) {
    this.title = title
    this.text = text
    this.id = id
  }

  render() {
    const postDOM = document.createElement('div');
    postDOM.style.border = "1px solid red"
    postDOM.style.margin = "10px";
    postDOM.style.padding = "10px";

    postDOM.innerHTML = `
    <h3>${this.title}</h3>
    <p>${this.text.substring(0, 300)} ...</p>
    <a href="#/view-post?id=${this.id}" >view post</a>
    <a href="#/edit-post?id=${this.id}" >edit post</a>
`

    return postDOM;
  }
}

export { Post }
// instanta a clasei Post
// const post1 = new Post()