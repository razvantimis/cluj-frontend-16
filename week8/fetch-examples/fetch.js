var baseUrl = "https://jsonplaceholder.typicode.com";
var posts;

function displayPost(post) {
    // get the post list
    var postList = document.getElementById("postsList");

    // create a list item
    var item = document.createElement("li");

    // add the post id, title and body
    item.innerHTML = post.id + " - " + post.title + ": " + post.body;

    // append the list item to the list
    postList.appendChild(item);
}

function getPosts(url) {
    fetch(baseUrl + url, {method: "GET"})
    .then(
        function(response){
            // parsing the response
            return response.json();
        }
    ).then(
        function(jsonResp) {
            // save the array with all the posts in the posts variable
            posts = jsonResp;

            // chech if we have more than one post
            if(posts.length > 1) {
                // more details about forEach - https://www.w3schools.com/jsref/jsref_foreach.asp
                posts.forEach(function(element){
                    // call the displayPost function for each element
                    displayPost(element);            
                });
            } else {
                displayPost(posts);
            }
        }
    );
}

function createPost(body) {
    fetch( baseUrl + '/posts', 
        {
            method: 'POST',
            body: JSON.stringify(body)
        }
    ).then(
        function(response){
            return response.json();
        }
    ).then(
        function(jsonResp) {
        console.log(jsonResp.id);
        getPosts("/posts/" + jsonResp.id);
    });
}

function deletePost(postId) {
    fetch(
        baseUrl + '/posts/' + postId,
        {method: 'DELETE'}
    ).then(
        function(response) {
            return response.json();
        }
    ).then(
        function(jsonResponse) {
            console.log("Deleted: ", jsonResponse);
        }
    );
}

// fetch only one post by id
getPosts("/posts/2");

// fetch all posts
getPosts("/posts");

// fetch all posts from a user id
getPosts("/posts?userId=4");


// create posts
createPost({userId: 41, title: "New post", body: "Post text"});

createPost({userId: 41, title: "Second post", body: "Hello"});

// delete the post with id=5
deletePost(5);
