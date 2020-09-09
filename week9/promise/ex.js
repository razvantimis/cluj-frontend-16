// v1
for(var a=0; a<10;a++){
  // a=0, a=1,...a=9,
  setTimeout(start, 0)
}
// a = 10

function start(){
  console.log(a) // afiseaza 10 de 10 ori
}

//v2 
function runExemple(){
  for(let index=0; index<10;index++){
    // index=0, index=1,...index=9,
    setTimeout(start, 100)
  
    function start(){
      console.log(index) // se afiseaza de la 0..9 pentru ca index este in bloc scop
    }
  }
}

// v3
function start(number){
  console.log(number)
}
function runExemple(){
  for(let index=0; index<10;index++){
    // index=0, index=1,...index=9,
    setTimeout(function(){
      start(index)
    }, 100)
  }
}