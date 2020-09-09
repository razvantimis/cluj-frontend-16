// lista cumparaturi

function Produs(pret, cantitate, nume) {
  this.pret = pret;
  this.cantitate = cantitate;
  this.nume = nume;
}
Produs.prototype.getPretTotal = function(){
  return this.pret * this.cantitate;
}

const produs1 = new Produs(5,1, 'faina')
const produs2 = new Produs(3,2, 'Ciocolata')
const produs3 = new Produs(3,2, 'Apa')
const produs4 = new Produs(20,2, 'Piep de pui')
const produs5 = new Produs(3,10, 'Bere')

const list = [produs1, produs2, produs3, produs4, produs5]

// 2. Afisam suma totala a produselor din lista
let sumaTotala = 0;
for (let index = 0; index < list.length; index++) {
  const produs = list[index];
  sumaTotala = sumaTotala + produs.getPretTotal();
}
// sumaTotala = 0 + 5 ( p1) + 6 (p2) + ...
console.log(sumaTotala)