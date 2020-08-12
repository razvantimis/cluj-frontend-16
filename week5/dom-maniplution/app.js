function startApp() {
  // cautare
  let commentBox = document.querySelector('#comment-box');
  console.log(commentBox)

  // editare
  // commentBox.innerHTML = '<b>test</b>'

  // creare
  const title = document.createElement('h2')
  title.innerText = 'First comment'

  commentBox.appendChild(title)

  const p = document.createElement('p');
  p.innerText = 'My fist msg'

  commentBox.appendChild(p)

  // update style

  commentBox.style.backgroundColor = 'red'; // nu se face
  commentBox.classList.add('comment-box-class') // se prefera cu clase

  // stergem

  // commentBox.removeChild(p)


 console.log('commentBox.parentNode', commentBox.parentNode)
 console.log('commentBox.firstChild', commentBox.firstChild)

}

document.addEventListener("DOMContentLoaded", startApp);

