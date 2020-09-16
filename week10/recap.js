// 2. Prototype
// 3. Encapsulation
// 4. Inheritance
// 5. Composition
// 6. Polymorphism


// 2. Prototype
// Orice obiect face are atributul __proto__
// Orice functie are un prop numit prototype
function Game() {
  this.name = 'hangman'
}
// start este o metoda pe clasa Game
Game.prototype.start = function () {

}
Game.prototype.toString = function () {
  console.log(this.name)
}

const game1 = new Game();
// game1.__proto__ nu ne atingem de ea

// Prototype chain
// Cum cauta javascript-ul metoda start?
game1.toString() // acum acest toString este pe Object.prototype
// Cautare toString
// 1. Se cauta la lvl1, game1 => {
//   name: 'hangman',
//  }
// 2. Se cauta la lvl2, Game.prototype=> {
//     start: Functie,
//     toString: Functie
//   }
// 3. Se cauta la lvl3 =>  Object.prototype
// game1 = {
//   name: 'hangman',
//   __proto__: {
//     start: Functie,
//     toString: Functie
//     __proto__: Object.prototype
//   }
// }

// 3. Encapsulation
// Vream ca this.name sa fie ascuns de exterior
// Iar getName sa fie acesibila
function Game() {
  this.__name = 'hangman'
}
Game.prototype.getName = function () {
  return 'Mr. ' + this.__name
}
const game1 = new Game()

// asa nu game1.__name
console.log(game1.getName())

// 4. Inheritance

function Animal(name) {
  this.name = name;
}
Animal.prototype.merge = function () {
  console.log('merge')
}

function Caine() {
  // this = ne referim la obiectul creat
  Animal.call(this, 'rex') // a harcoda
}
Caine.prototype = Object.create(Animal.prototype);
// Caine.prototype = Animal.prototype; nu se face asta

Caine.prototype.manaca = function () {

}

const dog1 = new Caine()

// 6. Polymorphism

function Animal(name) {
  this.name = name;
}
Animal.prototype.merge = function () {
  console.log('merge')
}

function Caine() {
  // this = ne referim la obiectul creat
  Animal.call(this, 'rex') // a harcoda
}
Caine.prototype = Object.create(Animal.prototype);

Caine.prototype.merge = function(){
  console.log('Caine.merge')
}
Caine.prototype.manaca = function () {

}

const animal1 = new Animal();
const dog1 = new Caine();
const list = [animal1, dog1]

for (let index = 0; index < list.length; index++) {
  const element = list[index];
  // aici element il consideram un obiect de tip Animal
  element.merge()
}
