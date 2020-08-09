// lista cumparaturi

var produs1 = {
  pret: 5,
  cantitate: 1,
  nume: 'Faina'
}

var produs2 = {
  pret: 3,
  cantitate: 2,
  nume: 'Ciocolata'
}
var produs3 = {
  nume: 'Apa',
  pret: 2,
  cantitate: 2,
}
var produs4 = {
  nume: 'Piep de pui',
  pret: 20,
  cantitate: 2,
}
var produs5 = {
  nume: 'Bere',
  pret: 3,
  cantitate: 10,
}

var list = [produs1, produs2, produs3, produs4, produs5]


// 1. sa calculam totalu la fiecare produs
// for (var index = 0; index < list.length; index++) {
//   console.log('index', index)
//   var produs = list[index];
//   console.log(produs.pret * produs.cantitate)
// }
// 2. suma totala
var sumaTotala = 0;
for (var index = 0; index < list.length; index++) {
  var produs = list[index];
  var totalPerProdus = produs.pret * produs.cantitate;
  sumaTotala = sumaTotala + totalPerProdus;
}
// sumaTotala = 0 + 5 ( p1) + 6 (p2) + ...
console.log(sumaTotala)

// cel mai scump produs din list
// primul produs este cel mai scump
// var produsScump = list[0];
// var produsScumpTotal = produsScump.pret * produsScump.cantitate;

// for (var index = 1; index < list.length; index++) {
//   var produs = list[index];
//   var totalPerProdus = produs.pret * produs.cantitate;
//   if (produsScumpTotal < totalPerProdus) {
//     produsScumpTotal = totalPerProdus;
//     produsScump = produs
//   }
// }
// console.log(produsScump)


// sa le sorta dupa pret
// index++ => index = index + 1
// compute how many times a certain element appears in an array
var findElement = 2
var list = [2, 1, 2, 3, 2, 6, 8, 9]