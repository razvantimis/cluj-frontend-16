// Callback

function start(a, callback){

  if(a == 10){
    console.log('a este 10')
  } else {
    callback();
  }
}

function callback(){
  console.log('a nu este 10')
}

start(10, callback)


start(11, function(){
  console.log('invat js')
})

function fn34(){
  console.log('sunt in fn34')
}
start(11, fn34)