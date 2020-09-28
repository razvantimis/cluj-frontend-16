// Array

// asa era inaite
const myPos = [30, 50];
const x = array[0]
const y = array[1]

// dupa es6
const myPos = [30, 50];
const [x, y] = myPos;
console.log(x)
console.log(y)

// ex2
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstElement] = array;

//spread
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstEl, ...lastPartOfArray] = array;

// Object

const user = {
  username: 'admin',
  password: 'password',
  start: function () {

  }
}
const { username, start } = user;

start();


// 10.3 Destructuring Nested Object

const person = {
  name: {
    firstName: 'Tim',
    lastName: 'Alex'
  }
}

// vom avea definita o variabila firstName
// const firstName = person.name.firstName
const { name: { firstName } } = person

// 10.4 Destructuring Rename

const { name: { firstName: name } } = person

console.log(name)


