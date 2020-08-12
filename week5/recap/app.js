// 1. variable
// 2. condition
// 7. == vs ===
// 3. for/while
// 4. ternary condition
// 5. array push
// 6. string exemple - find a char in string


// 1. variable
var myName = {
  key1: ['1000.34']
};

// 2. condition 
if (myName !== 'bogdan') {
  console.log(myName)
  console.log('razvan')
}

// 7. == vs ===
if (1 === '1') {
  console.log('1 este egal cu 1')
}

// 3. for/while 
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// 4. ternary condition
var result;

if (1 === '1') {
  result = 'razvan'
} else {
  result = 'bogdan'
}

var result = 1 === '1' ? 'razvan' : 'bogdan';

// 5. array push
var matrice = [];

matrice.push([1, 2, 3])
matrice.push([4, 5, 6])

// [[1, 2, 3], [4, 5, 6]]
console.log(matrice[0][0])

// 6. string exemple - find a char in string
var value = 'Razvan asdas asdas21232 1231asdas y'
var char = 'z'


for (var i = 0; i < value.length; i++) {
  if (value[i] == char) {
    console.log("exista " + char)
  }
}
