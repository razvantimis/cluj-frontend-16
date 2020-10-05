export default class AddPost {

  render(container) {
    const addPostContainer = document.createElement('div');

    addPostContainer.innerText = " Aici va fi adaugarea de posturi"

    container.appendChild(addPostContainer);
  }
}