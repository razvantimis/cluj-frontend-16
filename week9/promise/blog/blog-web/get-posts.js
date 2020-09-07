

function getPosts() {
  return fetch('http://localhost:3000/posts')
    .then(function (response) {
      return response.json()
    })
}

const container = document.querySelector('#posts')
getPosts().then(function (posts) {
  console.log(posts)

  // --- v1
  // for(let post of posts){
  //   const postDOM = createPostDOM(post);
  //   container.appendChild(postDOM);
  // }
  // ---- v2
  // for(let idx=0; idx < posts.length; idx++){
  //   const post = posts[idx];

  //   const postDOM = createPostDOM(post);
  //   container.appendChild(postDOM);
  // }
  // --- v3
  posts.forEach(function (post) {

    const deleteButton = createDeleteButton();
    deleteButton.addEventListener('click', function () {
      deletePost(post.id)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        })
    })
    const postDOM = createPostDOM(post);
    postDOM.appendChild(deleteButton);

    container.appendChild(postDOM);
  })

})

function deletePost(postId) {
  return fetch(`http://localhost:3000/posts/${postId}`, {
    method: 'DELETE'
  }).then(function (response) {
    return response.json();
  })
}

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