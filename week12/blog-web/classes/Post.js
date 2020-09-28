class Post {
  constructor(title, text) {
    this.title = title
    this.text = text;
  }

  render() {
    const postDOM = document.createElement('div');
    postDOM.style.border = "1px solid red"
    postDOM.style.margin = "10px";
    postDOM.style.padding = "10px";

    postDOM.innerHTML = `
    <h3>${this.title}</h3>
    <p>${this.text}</p>`

    return postDOM;
  }
}