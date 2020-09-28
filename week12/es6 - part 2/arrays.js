// https://martinfowler.com/articles/collection-pipeline/
const array = [1, 2, 3];
// .map
// face o transformare
// [1,2,3] => [2,3,4] => [ 1, 1.5, 2]
console.log(
  array
    .map(nr => nr + 1)
    .map(nr => nr / 2)
)