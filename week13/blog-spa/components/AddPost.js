import { ServerApi } from '../classes/ServerApi.js'
export default class AddPost {
    constructor() {
        this.addPostContainer = AddPost.createPostContainer();

    }

    static createPostContainer() {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
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
        return createDiv;
    }

    createPost() {
        console.log('start create post')
        const postData = this.getPostDataFromHtmlForm() // sa returneze un obiect post

        console.log(postData);

        ServerApi.savePost(postData)
            .then(function(response) {
                console.log(response)
            }).catch(function(err) {
                console.log(err)
            })
    }

    getPostDataFromHtmlForm() {
        const postTitle = this.addPostContainer.querySelector('#postTitle').value;
        const postAuthor = this.addPostContainer.querySelector('#postAuthor').value;
        const postText = this.addPostContainer.querySelector('#postText').value;
        const postDate = this.addPostContainer.querySelector('#postDate').value;

        return {
            author: postAuthor,
            title: postTitle,
            text: postText,
            date: postDate
        }
    }

    render(container) {
        const addButton = document.createElement('button');
        addButton.innerText = "Adauga post"

        this.addPostContainer.appendChild(addButton);

        addButton.addEventListener('click', () => {
            this.createPost();
        })

        container.appendChild(this.addPostContainer);
    }
}