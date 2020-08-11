/* Functions and Scopes
  1. What is function? How define a function?
  2. Paramater by reference / by value
  3. Scope
  4. Hoisting ( var vs let/const )
  5. Closure
  6. Callback
*/
//  3. Scope
// parameter scope
function hello(name, age){
  console.log('hello ' + name + age)
}
hello('razvan', 25)
// console.log(name) - nu merge
// var scope
function hello(name){
  var age = 27;
  console.log('hello ' + name + age)
  function test(){
    // avem acces la tot ce este mai sus
    console.log(age, name, isMen)
    var isMen = true;
  }
  test();
}
hello('razvan')
console.log(age);


var age = 27; // variabila globala
function hello(name){
  console.log('hello ' + name + age)
}
hello('razvan')
console.log(age);



// exemplu 
var a = 10;
function setNumber(){
  a = 8;
}
setNumber();
console.log(a); // 8


var a = 10;
function setNumber(){
  var a;
  a = 8;
}
setNumber();
console.log(a); // 10
//  4. Hoisting ( var vs let/const )
// variabile care sunt definite cu var si function au Hoisting
// 

// var a = 10;
// console.log(a); // 10

setNumber();
function setNumber(){// Hoisting inner function
  console.log('in function', a)
  // a = 8;
  var a;
}


var a = 10;
setNumber();
console.log(a); // 10

function setNumber(){ // Hoisting inner function
  console.log('in function', a)
  a = 8;
  if(true){
    if(true){
       var a;
    }
  }
}

// let / const
var a = 10;
setNumber();
console.log(a); // 10

function setNumber(){// Hoisting inner function
  console.log('in function', a)
  if(true){
    console.log(a) // nu-l putem accesa
    let a; // are scop doar in bloc
    // doar aici merge console.log(a)
  }
  console.log(a) // nu-l putem accesa
}


const a = 5;

// Hoisting
function test(){
  // avem acces la tot ce este mai sus
  console.log(age, name, isMen) // isMen = undefined
  var isMen = true; 
  console.log(isMen) // true
}