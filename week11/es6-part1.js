// es6 - es 2015

// 1. let,const
function test() {


  if (true) { // let/const au scope la nivel de block
    const a = 10;

    if (true) {
      const a = 3;
      console.log('inner if', a)
    }
    console.log('external if', a)

  }
  // nu putem accesa a aici
}
// Cei hosting-ul? Apare la var
// - poti accesa variabila inaite sa o definim
// - let/const nu au hosting

// 2. Arrow function
function start() {
console.log(this);
}
const start = () => {

}
// este foarte des folosita in cazul callback-urilor

function suma(a, b) {
  return a + b;
}
// const suma = (a,b) => {
//   return a + b;
// }
const suma = (a,b) => a + b;
console.log(suma(1, 5))

// this 

const userInput = document.querySelector('#userInput');

userInput.addEventListener('keydown', function(){
  // this - va fi chiar userInput
  // contextul de executie a functie callback este input-ul html
})

userInput.addEventListener('keydown', () => {
  // this == window
   console.log('this', this)
})
// 3. Class
class Car {
  constructor(type){
    this.__type = type;
  }
  
  start(){
    console.log('start')
  }
}

const car1 = new Car('dacia')

// 4. Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log('eat');
  }

  move() {
    console.log('merg');
  }
}


class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  eat() {
    console.log('eat & face mizerie');
  }

  woff() {
  }
}


// 5. Composition
class Post {
  constructor(title, comments) {
    this.title = title;
    this.comments = comments;
  }
}

class Comment {
  constructor(text) {
    this.text = text;
  }
}

const com1 = new Comment('com1')
const com2 = new Comment('com2')

const post1 = new Post('post1', [com1, com2])

// 6. Polymorphism

const animal1 = new Animal('leu');
const animal2 = new Dog('rex');
const listDeAnimale = [animal1, animal2]
for (let index = 0; index < listDeAnimale.length; index++) {
  const element = listDeAnimale[index];

  console.log(element.eat())
  
}

