

// function getPosts() {
//   return fetch('http://localhost:3000/posts')
//     .then(function (response) {
//       return response.json()
//     })
// }
async function getPosts() {
  const response = await fetch('http://localhost:3000/posts');
  return response.json()
}

// stergem postul de pe server
// Returneaza un promise
// function deletePost(postId) {
//   return fetch(`http://localhost:3000/posts/${postId}`, {
//     method: 'DELETE'
//   }).then(function (response) {
//     return response.json();
//   })
// }

async function deletePost(postId) {
  const response = await fetch(`http://localhost:3000/posts/${postId}`, { method: 'DELETE' })
  return response.json();
}


// const container = document.querySelector('#posts')
// getPosts().then(function (posts) {
//   console.log(posts)

//   posts.forEach(function (post) {
//     const postDOM = createPostDOM(post);

//     const deleteButton = createDeleteButton();
//     deleteButton.addEventListener('click', function () {
//       deletePost(post.id)
//         .then(function (response) {
//           console.log(response);
//           // reincarcam posturile
//           container.removeChild(postDOM);
//         })
//         .catch(function (err) {
//           console.log(err);
//         })
//     })
//     postDOM.appendChild(deleteButton);

//     container.appendChild(postDOM);
//   })

// })

async function main() {
  const container = document.querySelector('#posts')
  try {
    // aici se aduc posturile de pe server
    // posts = [ {title: '...', description: '...'}, ....]
    const posts = await getPosts();
    console.log(posts);

    // transformam un obiect post in reprezentarea lui in HTML
    // postsDOM = [ div , div , .....]
    const postsDOM = posts.map(createPostDOM);

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

function createPostDOM(post) {
  const postDOM = document.createElement('div');
  postDOM.style.border = "1px solid red"
  postDOM.style.margin = "10px";
  postDOM.style.padding = "10px";

  postDOM.innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.text}</p>`

  return postDOM;
}