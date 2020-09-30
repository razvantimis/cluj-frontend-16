// 1. Obtinem id din url
const idPost = window.location.search.substring(4);
console.log(idPost);
// 2. Facem requestul la server dupa id
ServerApi.getPostById(idPost).then(function (response) {
  console.log(response)
})