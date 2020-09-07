const postCreateButton = document.querySelector('#postCreateButton');
postCreateButton.addEventListener('click', createPost);

function createPost() {
  console.log('start create post')

  const post = getPostData() // sa returneze un obiect post
  // {
  // 	"author": "" - input de autor,
  //   "title": "" - din input,
  //   "text": "Post nou",
  //   "date": "07/09/2020"
  // }
  console.log(post)
 
}

function getPostData() {
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