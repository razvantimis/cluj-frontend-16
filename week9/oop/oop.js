// 3. Encapsulation
function Car(type) {
  this.__type = type;
}

Car.prototype.__start = function(){

}

// 4. Inheritance
function Animal(name){
 this.name = name;
}

Animal.prototype.eat = function(){
  console.log('eat')
}
Animal.prototype.move = function(){
  console.log('merg')
}

function Dog(name){
  // this - acest context sa fie trimis
  console.log(this)
  Animal.call(this, name) // === this.name = name;
}

// Dog.prototype = Animal.prototype; // au acelasi referinte
Dog.prototype = Object.create(Animal.prototype); 
// Object.create - face o copie a Animal.prototype
// Daca facem modificari pe Dog.prototype, nu va afecta Animal.prototype

// supra scriere
Dog.prototype.eat = function () {
  console.log('eat & face mizerie')
}
Dog.prototype.woff = function(){

}

// 5. Composition
function Post(title, comments){
 this.title = title;
 this.comments = comments
}

function Comment(text){
 this.text = text;
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
