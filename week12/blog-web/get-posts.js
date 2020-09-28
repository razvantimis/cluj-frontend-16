
async function main() {
  const container = document.querySelector('#posts')
  try {
    // aici se aduc posturile de pe server
    // posts = [ {title: '...', description: '...'}, ....]
    const posts = await ServerApi.getPosts();
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