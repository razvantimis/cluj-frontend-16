var baseUrl = "https://jsonplaceholder.typicode.com";
var posts;

function diplayPost(post) {
    // get the post list
    var postList = document.getElementById("postsList");

    // create a list item
    var item = document.createElement("li");

    // add the post id, title and body
    item.innerHTML = post.id + " - " + post.title + ": " + post.body;

    // append the list item to the list
    postList.appendChild(item);
}

// fetch only one post by id
fetch(baseUrl + "/posts/2", {method: "GET"})
.then(
    function(response){
        // The json() method takes a Response stream and reads it to completion.
        // It returns a promise that resolves with the result of parsing the body text as JSON.
        return response.json();
    }
).then(
    function(jsonResp) {
        console.log(jsonResp);
        // save the respons in the posts varialble
        posts = jsonResp;
        // call the display function
        diplayPost(posts);
   }
);

// fetch all posts
fetch(baseUrl + "/posts", {method: "GET"})
.then(
    function(response){
        // parsing the response
        return response.json();
    }
).then(
    function(jsonResp) {
        // save the array with all the posts in the posts variable
        posts = jsonResp;

        /* for(var i=0; i< posts.length; i++) {
            diplayPost(posts[i]);
        }; */

        // more details about forEach - https://www.w3schools.com/jsref/jsref_foreach.asp
        posts.forEach(function(element){
            // call the displayPost function for each element
            diplayPost(element);            
        });

    }
)

// add a new post
fetch( baseUrl + '/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}).then(
    function(response){
        return response.json();
}).then(
    function(jsonResp) {
    console.log(jsonResp);
});
