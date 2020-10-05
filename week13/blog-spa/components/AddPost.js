export default class AddPost {

  render(container) {
    const addPostContainer = document.createElement('div');

    addPostContainer.innerHTML = ` 
  <div class="input-section">
    Titlu: <input type="text" id="postTitle">
  </div>
  <div class="input-section">
    Text: <textarea type="text" id="postText" rows="10"></textarea>
  </div>
  <div class="input-section">
    Autor: <input type="text" id="postAuthor">
  </div>
  <div class="input-section">
    Date: <input type="text" id="postDate">
  </div>
`
    const addButton = document.createElement('button');
    addButton.innerText = "Adauga post"

    addPostContainer.appendChild(addButton);

    addButton.addEventListener('click', function () {
      console.log('sa dat click')
    })

    const postTitle = addPostContainer.querySelector('#postTitle');
    console.log(postTitle);



    container.appendChild(addPostContainer);
  }
}