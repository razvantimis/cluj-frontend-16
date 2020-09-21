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