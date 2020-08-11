/* Functions and Scopes
  1. What is function? How define a function?
  2. Paramater by reference / by value
  3. Scope
  4. Hoisting ( var vs let/const ) https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
  5. Closure
  6. Callback
*/
// 1. What is function? How define a function?
// isPrim(number) => boolean

function hello(name, age){
  console.log('hello ' + name + age)
}

hello('razvan', 25)

//  2. Paramater by reference / by value

function setName(name){
  name = 'hello';
}

var myName = 'razvan';
setName(myName)
console.log(myName);
var person = {
  name: 'razvan'
};

function setName(person){
  person.name = 'hello';
}


setName(person)
console.log(person);

var list = [1,2,3]

function setItem(list){
  list[0] = 9999;
}

setItem(list);
console.log(list)

// return

function isOdd(value){
  return value % 2 !== 0;
}

console.log(isOdd(11))

// return 
var person = {
  name: 'razvan',
  age: 28
};

function setName(person) {

  return {
    age: person.age,
    name: 'hello'
  }
}

var newPerson = setName(person)
console.log(newPerson);


// return condition && recursive

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1)
}
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 * factorial(0)
// factorial(0) = 1
console.log(factorial(4))