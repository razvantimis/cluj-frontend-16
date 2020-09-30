// 1. Obtinem id din url
const idPost = window.location.search.substring(4);
console.log("idPost = ", idPost);
ServerApi.getPostById(idPost).then(function (post) {
  console.log("post =", post)
  const postTitleInput = document.querySelector('#postTitle');
  const postAuthorInput = document.querySelector('#postAuthor');
  const postTextInput = document.querySelector('#postText');
  const postDateInput = document.querySelector('#postDate');

  postTitleInput.value = post.title;
  postAuthorInput.value = post.author;
  postTextInput.value = post.text;
  postDateInput.value = post.date;
})


const postUpdateButton = document.querySelector('#postUpdateButton');
postUpdateButton.addEventListener('click', editPost);

function editPost() {
  const newPostData = getPostDataFromHtmlForm() // sa returneze un obiect post
  console.log('post pentru update=', newPostData);


  ServerApi.editPost(newPostData, idPost).then(function () {
    console.log('sa facut update cu sucess')
    window.location.href = `./view-post.html?id=${idPost}`
  })

}


function getPostDataFromHtmlForm() {
  const postTitle = document.querySelector('#postTitle').value;
  const postAuthor = document.querySelector('#postAuthor').value;
  const postText = document.querySelector('#postText').value;
  const postDate = document.querySelector('#postDate').value;

  return {
    author: postAuthor,
    title: postTitle,
    text: postText,
    date: postDate
  }
}