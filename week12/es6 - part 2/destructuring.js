// Array

// asa era inaite
const myPos = [30, 50];
const x = array[0]
const y = array[1]

// dupa es6
const myPos = [30, 50, 200];
const [x, y, z] = myPos;
console.log(x)
console.log(y)

// ex2
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstElement] = array; // const firstEl = array[0]

//spread
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstEl, ...lastPartOfArray] = array;

// Object

const user = {
  username: 'admin',
  password: 'password123',
  start: function () {

  }
}
// user.username
// user.password
// user.start
const { username, password, start } = user;

console.log(username)
console.log(password)
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
const user = {
  username: 'admin',
  password: 'password123',
}
const { username: adminUserName, password } = user;
console.log(adminUserName)



const { name: { firstName: name } } = person

console.log(name)


