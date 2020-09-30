
class ServerApi {

  static async getPostById(idPost) {
    const response = await fetch(`http://localhost:3000/posts/${idPost}`)
    return response.json()
  }

  static async getPosts() {
    const response = await fetch('http://localhost:3000/posts');
    return response.json()
  }

  // stergem postul de pe server
  // Returneaza un promise
  static async deletePost(postId) {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, { method: 'DELETE' })
    return response.json();
  }

  static async savePost(post) {
    const response = await fetch("http://localhost:3000/posts", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    });

    return response.json();
  }

  static async editPost(postData, postId) {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    return response.json();
  }
}