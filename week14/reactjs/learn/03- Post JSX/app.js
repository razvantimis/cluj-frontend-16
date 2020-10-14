// 2. Post JSX

// const PostH1Component = React.createElement('h1', null, 'Post title')
// const PostPComponent = React.createElement('p', null, 'Post content')
// const PostComponent = React.createElement('div', null, PostH1Component, PostPComponent)

const postTitle = "Post nou"
const PostComponent = (<div>
  <h1>Post title: {postTitle}</h1>
  <p>Post content</p>
</div>)


const appDOM = document.getElementById('app');
ReactDOM.render(PostComponent, appDOM) 