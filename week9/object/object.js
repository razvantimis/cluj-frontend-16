/*
1. Objects 
  - Why object?
  - How we define 
  - How we use 
  - Zoo exemple
2. Classes
3. Prototypes
*/

let user = {} // obiect gol

let user = {
  name: 'Alex',
  username: 'alex_34',
  password: '*****'
}
// afisam - static
console.log(user.name)
console.log(user.password)

// dinamic
console.log(user['name']) // user.name
let key = 'name';
console.log(user[key])


function showValue(x){
  console.log(user[x])
}
showValue('name')
showValue('username')

// afisam de cate ori apare fiecare numar in array
function run(){
  const array = [1,3,3,3,3, 6,5,3,8,9,3,5,8,3,0,2,3,7,3]
  const result = {}
  /*
  {
    1: 1,
    3: 3,
    6: 1,
  }
  */
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  
    // aici intra doar prima data cand nu exista
    if(!result[element]){
      result[element] = 0;
    }

    result[element] = result[element] + 1
  }
  console.log(result);
}


// method
const USERNAME = 'admin'
const PASSWORD = 'admin'
// v1
let user = {
  name: 'Alex',
  username: 'alex_34',
  password: '*****',
  age: 23,
  isMen: true,
  login: function(){
    console.log('login user')
    if(user.username === USERNAME){
      console.log('succes login')
    } else {
      console.log('error login')
    }
  }
}

user.login()

// v2
let user = {
  name: 'Alex',
  username: 'alex_34',
  password: '*****',
  age: 23,
  isMen: true,
  login: function(){
    console.log('login user')
    console.log(this)
  }
}

user.login()
