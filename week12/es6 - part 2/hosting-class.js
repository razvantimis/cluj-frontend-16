// hosting se aplica doar pe variabila declarate cu var sau functii

console.log(a) // undefined
var a = 10; // a = 10


// class nu are hosting
const car1 = new Car('dacia')

// declaratile de clase nu au hosting
class Car {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log('start')
  }
}