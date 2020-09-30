async function displayPostsInHtml() {
    const container = document.querySelector('#posts')
    try {
        // aici se aduc posturile de pe server
        // posts = [ {title: '...', description: '...'}, ....]
        const posts = await ServerApi.getPosts();
        console.log(posts);

        // tranformam obiectele de la server, in instante a clasei Post
        const postsObject = posts
            .map(post => new Post(post.title, post.text))

        // transformam un obiect post in reprezentarea lui in HTML
        // postsDOM = [ div , div , .....]
        const postsDOM = postsObject.map(function(postObject) {
            return postObject.render()
        });

        // am adaugat div-urile de mai sus , in container
        postsDOM.forEach(postDOM => container.appendChild(postDOM))

    } catch (e) {
        console.log(e)
        container.innerHTML = "Server error"
    }

}

displayPostsInHtml();