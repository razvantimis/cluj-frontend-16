// inaite de es6
function Car(type) {
  this.type = type
}

Car.prototype.start = function () {
  console.log('start')
  console.log('start() => speed limit =', Car.SPEED_LIMIT)
}
Car.SPEED_LIMIT = 200; // var SPEED_LIMIT = 200
Car.clean = function () {
  console.log('clean')
}

const car1 = new Car();
console.log('global => speed limit =', Car.SPEED_LIMIT)


// es6

class Car {
  static SPEED_LIMIT = 200;

  static clean() {
    console.log('clean')
  }

  constructor(type) {
    this.type = type;
    // this.SPEED_LIMIT = 200;
  }

  start() {
    console.log('start')
    console.log('start() => speed limit =', Car.SPEED_LIMIT)
  }


}

console.log(Car.clean());

const car1 = new Car();
const car2 = new Car();


// real exemple

class ServerApi {
  static async getPosts() {
    const response = await fetch('http://localhost:3000/posts');
    return response.json()
  }

  static async deletePost(postId) {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, { method: 'DELETE' })
    return response.json();
  }
}


ServerApi.getPosts()