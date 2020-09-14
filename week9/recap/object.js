// Ce este un obiect?
var car = {
  type: 'Mercedez',
  culoare: 'red',
  tractiune: 'spate',
  kai: 170,
  porneste: function () {
    console.log('porneste')
  }
}
// ce este o classa ?
// o clasa este un blueprint/schita
// putem sa instantiem obiecte de acelasi tip
// functie constructor
function Car(type, culoare, tractiune, kai) {
  console.log(this);
  this.__type = type;
  this.culoare = culoare;
  this.tractiune = tractiune;
  this.kai = kai;
}

Car.prototype.__start = function(){


}

const car1 = new Car('Mercedez', 'red', 'spate', 170)
const car2 = new Car('Dacie', 'white', 'spate', 120)

// cum putem functionalitate pe o clasa ?
// car1.__proto__ === car2.__proto__ === Car.prototype

// nu merge
// Car.prototype = {
//   porneste: function(){
//    console.log('incorect Car.porneste')
//   }
// } // daca ai face asa, insemna ca schimbi referinta

Car.prototype.porneste = function () {
  console.log('incorect Car.porneste')
}


// suprascriem functie de mai sus
Car.prototype.porneste = function () {
  console.log('corect porneste')
}



// nu facem asta niciodata, stricam toate array-urile 
const arr = [];
arr.__proto__.forEach = function () {
  console.log('nu face nimic')
}



// Proto chain


function Car(type) {
  this.type = type;
  // this.porneste = function(){
  //   console.log('din constructor')
  // }
}
Car.prototype.porneste = function () {
  console.log('corect porneste')
}


const car1 = new Car('dacie');
car1.porneste() 
// ce se instampla
// 1. Se cauta la nivel de obiect 