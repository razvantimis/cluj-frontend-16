// 1. Obtinem id din url
const idPost = window.location.search.substring(4);
console.log("idPost = ", idPost);
// 2. Facem requestul la server dupa id
ServerApi.getPostById(idPost).then(function (post) {
  console.log("post =", post)
  // 3. Sa afisam in html continu unui post
  const postContainer = document.getElementById("postContainer");
  postContainer.innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.text} </p>
  `
})
