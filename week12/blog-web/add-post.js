/*

// Pasi implementare adaugare post
1. Definirea structuri html - input, button etc
2. Crearea unui obiect cu valorile din inputuri
3. savePostOnServer - salveaza postul pe server si returneaza un promise

*/
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

  ServerApi.savePost(post)
    .then(function (response) {
      console.log(response)
    }).catch(function (err) {
      console.log(err)
    })

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