
import { PostList } from './components/PostList.js';
import AddPost from './components/AddPost.js';

const app = document.getElementById('app');

const addPost = new AddPost();
addPost.render(app);

const postList = new PostList();
postList.render(app)




