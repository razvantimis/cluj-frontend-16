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

// .reducer
const array = [23, 45, 98];

console.log(
  array.reduce((acumulator, nr) => {
    return acumulator + nr;
  }, 0)
)
// acumulator = 0
// pas1: 0 + 23
// pas2: 23 + 45
// pas3: 68 + 98

// .forEach
array.forEach(function(nr){
  console.log(nr)
})