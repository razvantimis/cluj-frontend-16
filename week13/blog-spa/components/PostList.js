import { ServerApi } from '../classes/ServerApi.js'
import { Post } from '../classes/Post.js'

export class PostList {
  constructor() {
    this.postsContainer = document.createElement('div')
    this.postsContainer.classList.add('post-list')
  }

  async displayPostsInHtml() {
    try {
      // aici se aduc posturile de pe server
      // posts = [ {title: '...', description: '...'}, ....]
      const posts = await ServerApi.getPosts();
      console.log(posts);

      // tranformam obiectele de la server, in instante a clasei Post
      const postsObject = posts
        .map(post => new Post(post.title, post.text, post.id))

      // transformam un obiect post in reprezentarea lui in HTML
      // postsDOM = [ div , div , .....]
      const postsDOM = postsObject.map(function (postObject) {
        return postObject.render()
      });

      // am adaugat div-urile de mai sus , in container
      postsDOM.forEach(postDOM => this.postsContainer.appendChild(postDOM))

    } catch (e) {
      console.log(e)
      this.postsContainer.innerHTML = "Server error"
    }

  }

  render(container) {
    // <div id="posts"></div>

    container.appendChild(this.postsContainer);
    this.displayPostsInHtml();
  }
}