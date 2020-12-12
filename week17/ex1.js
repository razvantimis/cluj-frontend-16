function asyncFn(){
  new Promise((resolve, reject) => {
    setTimeout(()=> resolve('DONE'), 100)
  })
}

async function main(){
  const x = await asyncFn();
  console.log(x)
}

main();