class Post {
  constructor(title, text){
    this.title = title
    this.text = text;
  }

  render(){
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

// stergem postul de pe server
// Returneaza un promise
async function getPosts() {
  const response = await fetch('http://localhost:3000/posts');
  return response.json()
}

async function deletePost(postId) {
  const response = await fetch(`http://localhost:3000/posts/${postId}`, { method: 'DELETE' })
  return response.json();
}


async function main() {
  const container = document.querySelector('#posts')
  try {
    // aici se aduc posturile de pe server
    // posts = [ {title: '...', description: '...'}, ....]
    const posts = await getPosts();
    console.log(posts);

    // transformam un obiect post in reprezentarea lui in HTML
    // postsDOM = [ div , div , .....]
    const postsDOM = posts
    .map(post => new Post(post.title, post.text))
    .map(postObject => postObject.render());

    // am adaugat div-urile de mai sus , in container
    postsDOM.forEach(postDOM => container.appendChild(postDOM))

  } catch (e) {
    console.log(e)
    container.innerHTML = "Server error"
  }

}
main();



function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.style.border = "1px solid green"

  return deleteButton;
}