function ex1(){
  console.log(this); // contextul de rularea a functie
}

const obj = {
  prop1: 'value1',
  method1: function(){
    console.log(this.prop1) // this este obiectul nostru
  }
}

function Car(name){ // functii constructor
 this.name = name // this va fi obietul car1,car2
}

Car.prototype.start = function(){
  console.log('start')
  console.log(this) // this va fi obiectul
}
Car.prototype.stop = function(){

}

const car1 = new Car('dacia')
const car2 = new Car('bmw')

// prototype este acelasi la toate
Car.prototype == car2.__proto__ == car1.__proto__