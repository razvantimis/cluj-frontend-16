// spread op = ...

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstEl, ...lastPartOfArray] = array;

function run(nume, vastra, greutate, inaltime, cnp){
  console.log(nume)
}

function run(nume, ...detaliPersonale){
  console.log(nume)
  console.log(detaliPersonale)
}


run('Alex', 23, 78, 178, 1940812234067)

// ex2

const detali = [ 'alex', 23, 'M']

show(...detali); //  => show(detali[0], detali[1], detali[2])

function show(name, age, sex){
 console.log(name)
 console.log(age)
 console.log(sex)
}




