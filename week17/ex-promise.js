function createSpecialPromise() {
  new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      resolve('inner promise');
      console.log('inner promise');
    }).then((res) => {
      resolve(`speccial promise with ${res}`);
      console.log(`special promise with ${res}`);
    });
  });
}
function createPromises(n) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(new Promise((resolve, reject) => {
      resolve(`promise ${ i}`);
      console.log(`promise ${i}`);
    }));
  }
  return a;
}
createPromises(5);
createSpecialPromise();
createPromises(5);