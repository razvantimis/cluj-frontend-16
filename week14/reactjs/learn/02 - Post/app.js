// 2. Post - title and content ( ReactJs vs DOM)
// version DOM
/*
<div class="single-post">
 <h1>Titlu post</h1>
 <p>Continut post</p>
</div>
*/

// const postDiv = document.createElement('div');

// const postH1 = document.createElement('h1')
// postH1.innerText = "Post title"

// const postP = document.createElement('p');
// postP.innerText = "Post content"

// postDiv.appendChild(postH1);
// postDiv.appendChild(postP);


// const appDOM = document.getElementById('app');
// appDOM.appendChild(postDiv)

// version reactjs -v1

// const PostH1Component = React.createElement('h1', null, 'Post title')
// const PostPComponent = React.createElement('p', null, 'Post content')
// const PostComponent = React.createElement('div', null, PostH1Component, PostPComponent)

// version v2
const PostComponent = React.createElement('div', null,
  React.createElement('h1', null, 'Post title'),
  React.createElement('p', null, 'Post content')
)


const appDOM = document.getElementById('app');
ReactDOM.render(PostComponent, appDOM) 