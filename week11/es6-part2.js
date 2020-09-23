// 9. Promise async/await

// Sa rulam un task 

function throwAError(index) {
  if (index > 99999) {
    throw new Error('To much')
  }
}

function runTask() {
  const promise = new Promise((resolve, reject) => {
    try {
      // avem cod care dureaza mult sa se exeute
      for (let index = 0; index < 99999999999; index++) {
        const sum = index + 10;
        const t = sum / 2;
        throwAError(index)
      }
      resolve(10); // sa terminat de executat

    } catch (error) {
      console.log(error)
      reject(error);
    }

  })

  return promise;
}

runTask()
  .then(data => {
    console.log(data) // va fi valoarea 10
  })
  .catch(err => {
    console.log(err)
  })

// es6 async / wait
async function runTask(name) {
  for (let index = 0; index < 9999999999; index++) {
    const sum = index + 10;
    const t = sum / 2;
    // throwAError(index)
  }
  console.log(`name=${name} ----- cod in runTask`)
  return 10;

}
async function showConsoleLog(name){
  console.log(`name=${name} ----- cod in showConsoleLog`)
}
// v1
async function main() {
  try {
    for (let index = 0; index < 10; index++) {
      runTask(index);
      showConsoleLog(index)
    }
   
  } catch (err) {
    console.log(err)
  }
}
// v2
async function main() {
  try {
    const data = await runTask(); // data va fi valoarea 10
    console.log('se executa dupa ce se termina runTask')
  } catch (err) {
    console.log(err)
  }
}

runTask()
  .then(data => {
    console.log(data) // va fi valoarea 10
  })
  .catch(err => {
    console.log(err)
  })





//  5. Array - map, reducer, forEach, 


// map

const array = [ 1, 2 ,3];
console.log(array.map(value => {
  return value + 10
}))